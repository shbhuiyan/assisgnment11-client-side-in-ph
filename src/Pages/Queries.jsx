import axios from "axios";
import { useEffect, useState } from "react";
import RecentQueryCard from "../Components/cards/RecentQueryCard";


const Queries = () => {
  const [queries , setQueries] = useState([])
  const [changeLayout , setChangeLayout] = useState(true)


  useEffect(() => {
      axios.get('http://localhost:5000/queries')
      .then(res => setQueries(res.data))
  },[])


  return (
    <div className="">
      <div className="my-10 text-center space-y-4">
      <h1 className="text-4xl font-bold">Explore User Queries</h1>
      <p className="font-medium">Discover what others are asking and join the discussion.</p>
      <button onClick={()=>setChangeLayout(!changeLayout)} className="btn btn-outline btn-neutral">Change Layout</button>
      </div>
      <div className={`${changeLayout ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-20" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 my-20"}`}>
        {
            queries.map(query => <RecentQueryCard key={query._id} query={query} />)
        }
      </div>
    </div>
  );
};

export default Queries;