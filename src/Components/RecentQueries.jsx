import axios from "axios";
import { useEffect, useState } from "react";
import RecentQueryCard from "./cards/RecentQueryCard";
import { Link } from "react-router-dom";

const RecentQueries = () => {
    const [queries , setQueries] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/queries?limit=true')
        .then(res => setQueries(res.data))
    },[])

    return (
        <div className="space-y-20">
            <div className="text-center space-y-4 max-w-xl mx-auto">
                <h1 className="text-4xl font-bold">Recent Queries</h1>
                <p>Explore the latest questions and concerns from our community to find insights, advice, and recommendations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    queries.map(query => <RecentQueryCard key={query._id} query={query} />)
                }
            </div>
            <Link to={'/queries'} className="btn btn-warning">View All</Link>
        </div>
    );
};

export default RecentQueries;