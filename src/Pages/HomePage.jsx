import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";



const HomePage = () => {


    return (
        <div className="space-y-20 p-4">
            <Banner/>
            <Outlet/>
        </div>
    );
};

export default HomePage;