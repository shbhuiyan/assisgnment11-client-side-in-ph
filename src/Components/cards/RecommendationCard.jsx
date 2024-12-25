/* eslint-disable react/prop-types */

const RecommendationCard = ( {recommend} ) => {


    const {recommendationTitle , recommendedProductName , recommendedImageUrl , recommendationReason , currentDateTime , currentUserName} = recommend;

    return (
        <div className="flex items-center gap-6 border-2 p-4 rounded-lg">
            <img className="w-28 rounded-lg" src={recommendedImageUrl} alt="" />
            <div>
                <p>
                  <span className="font-semibold">Recommended By : </span> {currentUserName}
                </p>
                <p>
                  <span className="font-semibold">Time : </span> {currentDateTime}
                </p>
                <p>
                  <span className="font-semibold">Product Name : </span> {recommendedProductName}
                </p>
                <p>
                  <span className="font-semibold">Recommended Title : </span> {recommendationTitle}
                </p>
                <p>
                  <span className="font-semibold">Comment : </span> {recommendationReason}
                </p>
            </div>
        </div>
    );
};

export default RecommendationCard;