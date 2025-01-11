/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RecentQueryCard = ({query}) => {
    

    const {productName , queryTitle , recommendationCount , currentDateTime , productImageUrl , _id} = query

    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="card bg-base-100 border shadow-xl p-4">
          <figure>
            <img
                className="h-52"
              src={productImageUrl}
              alt={productName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {productName}</h2>
            <p className="text-lg text-red-500 font-medium">{queryTitle}</p>
            <p className="font-medium text-sm text-green-500">Recommends Count : {recommendationCount}</p>
            <p className="text-lg font-medium">Posted Time : {currentDateTime}</p>
            <div className="card-actions justify-end">
              <Link to={`/details/${_id}`} className="btn btn-accent">Recommend</Link>
            </div>
          </div>
        </div>
    );
};

export default RecentQueryCard;