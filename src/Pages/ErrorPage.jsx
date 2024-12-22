import Lottie from "lottie-react";
import animationData from "../../public/animation.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <Lottie
        className="max-w-7xl mx-auto mb-8"
        animationData={animationData}
        loop={true}
      />
      <Link
        to="/"
        className="px-8 py-4 bg-blue-500 rounded-xl text-white text-xl font-bold hover:bg-blue-700 duration-500"
      >
        Back to Earth
      </Link>
    </div>
  );
};

export default ErrorPage;