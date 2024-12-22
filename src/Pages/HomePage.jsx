import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";



const HomePage = () => {


    return (
        <div className="space-y-20">
            <Banner/>
            <Outlet/>
        </div>
    );
};

export default HomePage;