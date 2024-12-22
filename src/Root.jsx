import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Root = () => {

    const {darkTheme} = useContext(AuthContext)

    return (
        <div className={`${darkTheme ? "dark-theme container md:w-11/12 mx-auto" : "container md:w-11/12 mx-auto"}`}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;