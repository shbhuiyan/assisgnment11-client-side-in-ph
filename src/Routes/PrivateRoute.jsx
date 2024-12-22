import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const { user , loading} = useContext(AuthContext);
  const location = useLocation()

        if(loading){
            return <Loader />
        }
        if(user && user?.email){
           return children
        }else{
           return <Navigate  state={location.pathname} to={'/signin'} />;
        }
};

export default PrivateRoute;