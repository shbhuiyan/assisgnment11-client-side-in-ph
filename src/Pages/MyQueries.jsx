import Lottie from "lottie-react";
import animationForBanner from "../../public/Animation - 1734968125018.json";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyQueryCard from "../Components/cards/MyQueryCard";
import NoData from "../Components/NoData";
import Swal from "sweetalert2";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";


const MyQueries = () => {
  const [queries , setQueries] = useState([])
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()

  const handleDeleteQuery = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if(result.isConfirmed){
        axiosSecure.delete(`/queries/delete/${id}`)
        .then(res => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Queries has been deleted.",
              icon: "success",
            });
            setQueries(queries.filter(deletedQuery => deletedQuery._id !== id))
          }
        })
      }
    })
  }

  useEffect(() => {
    axiosSecure.get(`/user-queries/${user?.email}`)
    .then(res => {
      setQueries(res.data)
    })
  },[axiosSecure, user?.email])

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
              className="md:max-w-md"
              animationData={animationForBanner}
              loop={true}
            />
            </div>
          </div>

          <div className="">
          <h1 className="text-4xl text-center font-bold my-10">My Posted Queries</h1>
          
          {
            queries.length ? <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                      {
                          queries.map(query => <MyQueryCard key={query._id} handleDeleteQuery={handleDeleteQuery} query={query} />)
                      }
                      </div> 
                      : 
                      <NoData />
          }
          </div>
    
    </div>
  );
};

export default MyQueries;