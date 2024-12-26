import axios from "axios";
import { useEffect, useState } from "react";
import RecentQueryCard from "../Components/cards/RecentQueryCard";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [changeLayout, setChangeLayout] = useState(true);

  useEffect(() => {
    axios
      .get("https://b10-a11-server-side-shbhuiyan-main.vercel.app/queries")
      .then((res) => setQueries(res.data));
  }, []);

  return (
    <div className="">
      <div className="my-10 text-center space-y-4">
        <h1 className="text-4xl font-bold">Explore User Queries</h1>
        <p className="font-medium">
          Discover what others are asking and join the discussion.
        </p>
        <div className="flex justify-between gap-5">
          <form className="flex">
      <input
        type="text"
        name="search"
        // value={search}
        placeholder="Search here ..."
        className="border-2 p-3 rounded-s-lg w-full outline-none max-w-xs" />
      <button className="p-3 border-2 border-rose-500 px-5 font-bold hover:bg-rose-400 bg-rose-500 rounded-e-lg" type="submit">Search</button>
    </form>
          <button
            onClick={() => setChangeLayout(!changeLayout)}
            className="btn btn-outline btn-neutral max-lg:hidden"
          >
            Change Layout
          </button>
        </div>
      </div>
      <div
        className={`${
          changeLayout
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-20"
            : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 my-20"
        }`}
      >
        {queries.map((query) => (
          <RecentQueryCard key={query._id} query={query} />
        ))}
      </div>
    </div>
  );
};

export default Queries;
