/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();


const MyQueryCard = ( {query , handleDeleteQuery} ) => {

    const {productName , queryTitle , recommendationCount , productImageUrl , currentDateTime , _id} = query


    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="card bg-base-100 border shadow-xl p-4">
          <figure>
            <img
                className="max-h-52"
              src={productImageUrl}
              alt={productName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {productName}</h2>
            <p className="text-lg text-red-500 font-medium">{queryTitle}</p>
            <p className="text-xl font-medium">Recommends : {recommendationCount}</p>
            <p className="text-lg font-medium">Posted Time : {currentDateTime}</p>
            <div className="card-actions justify-between">
              <Link to={`/details/${_id}`} className="btn btn-outline btn-accent">View Details</Link>
              <Link to={`/update/${_id}`} className="btn btn-outline btn-neutral">Update</Link>
              <button onClick={()=>handleDeleteQuery(_id)} className="btn btn-outline btn-error">Delete</button>
            </div>
          </div>
        </div>
    );
};

export default MyQueryCard;