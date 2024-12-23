import axios from "axios";
import { useEffect, useState } from "react";
import RecentQueryCard from "../Components/cards/RecentQueryCard";


const Queries = () => {
  const [queries , setQueries] = useState([])


  useEffect(() => {
      axios.get('http://localhost:5000/queries')
      .then(res => setQueries(res.data))
  },[])


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-20">
    {
        queries.map(query => <RecentQueryCard key={query._id} query={query} />)
    }
    </div>
  );
};

export default Queries;