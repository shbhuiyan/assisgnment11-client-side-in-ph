import animationForComments from "../../public/Animation - no.json";
import Lottie from "lottie-react";


const NoRecommendFound = () => {
    return (
        <div>
                <Lottie
                className="md:max-w-md mx-auto"
                animationData={animationForComments}
                loop={true}
                />
                <p className="text-xl font-bold text-red-500 text-center mt-4">Recommendation is not available yet.</p>
              </div>
    );
};

export default NoRecommendFound;