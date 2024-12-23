import Lottie from "lottie-react";
import animationForBanner from "../../public/Animation - 1734968125018.json";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import MyQueryCard from "../Components/cards/MyQueryCard";
import NoData from "../Components/NoData";


const MyQueries = () => {
  const [queries , setQueries] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(() => {
    axios.get(`http://localhost:5000/user-queries/${user?.email}`)
    .then(res => {
      setQueries(res.data)
    })
  },[user?.email])

  return (
    <div className="space-y-20">
          <div className="flex max-md:flex-col-reverse items-center justify-center my-20 max-md:p-4 xl:max-h-60">
            <div className="space-y-4 md:w-1/2">
             <h1 className="text-4xl lg:text-5xl font-bold">Explore and Manage Your Product Queries</h1>
             <p className="text-lg lg:text-xl">Find the perfect recommendations tailored just for you. Start by adding your queries below!</p>
             <Link to={'/add'} className="btn btn-outline btn-info">Add Queries</Link>
            </div>
            <div>
            <Lottie
              className="max-w-lg"
              animationData={animationForBanner}
              loop={true}
            />
            </div>
          </div>

          {
            queries.length ? <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                      {
                          queries.map(query => <MyQueryCard key={query._id} query={query} />)
                      }
                      </div> 
                      : 
                      <NoData />
          }
    
    </div>
  );
};

export default MyQueries;