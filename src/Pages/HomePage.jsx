import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import FNQ from "../Components/FNQ";
import FeaturesSection from "../Components/FeaturesSection";



const HomePage = () => {


    return (
        <div className="space-y-20 p-4">
            <Banner/>
            <Outlet/>
            <FNQ />
            <FeaturesSection />
        </div>
    );
};

export default HomePage;