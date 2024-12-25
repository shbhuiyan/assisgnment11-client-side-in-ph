import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import NoRecommendFound from "../Components/NoRecommendFound";

const MyRecommend = () => {
    const [recommends , setRecommends] = useState([])

    const {user} = useContext(AuthContext)
    useEffect(() => {
        axios.get(`http://localhost:5000/recommendations-by-user/${user?.email}`)
        .then(res => {
            setRecommends(res.data);
        })
    },[user?.email])

    return (
        <div className="overflow-x-auto max-w-5xl mx-auto my-10">
            <h1 className="text-3xl text-center font-bold mb-8">My All Recommendations</h1>
          {
            recommends.length ? 
                <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Recommendation Title</th>
                        <th>Created At</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        
                      {/* recommendation table row */}
                    {
                        recommends.map(recommend => <tr key={recommend._id}>
                            <td>
                                <img className="w-10 rounded-lg" src={recommend.recommendedImageUrl} alt="" />
                            </td>
                            <td>
                                 {recommend?.recommendedProductName}
                            </td>
                            <td>
                                 {recommend?.recommendationTitle}
                            </td>
                            <td>
                                 {recommend.currentDateTime}
                            </td>
                            <td>
                                <button className="btn hover:bg-red-600 font-bold hover:text-white bg-red-400 btn-sm">Delete</button>
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

export default MyRecommend;