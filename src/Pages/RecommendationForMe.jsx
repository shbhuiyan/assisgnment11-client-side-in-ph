import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import NoRecommendFound from "../Components/NoRecommendFound";
import { Link } from "react-router-dom";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";


const RecommendationForMe = () => {
    const [recommendations , setRecommendations] = useState([])
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    
    useEffect(() => {
        axiosSecure.get(`/recommendations-for-me/${user?.email}`)
        .then(res => {
            setRecommendations(res.data);
        })
    },[axiosSecure, user?.email])

    return (
        <div className="overflow-x-auto my-10">
            <h1 className="text-3xl text-center font-bold mb-8">Recommendations For Me</h1>
          {
            recommendations.length ? 
                <table className="table border-y">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Queries</th>
                        <th>Recommendation</th>
                        <th>Recommendation Image</th>
                        <th>Product Name</th>
                        <th>Recommender</th>
                        <th>Recommended Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      {/* recommendation table row */}
                    {
                        recommendations.map(recommend => <tr key={recommend._id}>
                            <td>
                                {recommend.itemTitle}
                            </td>
                            <td>
                                {recommend.recommendationTitle}
                            </td>
                            <td>
                                <img className="w-10 rounded-lg" src={recommend.recommendedImageUrl} alt="" />
                            </td>
                            <td>
                                 {recommend?.recommendedProductName}
                            </td>
                            <td>
                                 {recommend?.currentUserName}
                            </td>
                            <td>
                                 {recommend.currentDateTime}
                            </td>
                            <td>
                                <Link to={`/details/${recommend.queryId}`} className="btn btn-link btn-sm">View Details</Link>
                            </td>
                         </tr>)
                    }
                    </tbody>
                </table>
                :
                <NoRecommendFound />
          }
        </div>
    );
};

export default RecommendationForMe;