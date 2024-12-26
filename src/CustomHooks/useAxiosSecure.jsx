import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials:true,
})


const useAxiosSecure = () => {

    const {logOut} = useContext(AuthContext)
    const   navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(res => {
            return res

        } , err => {
            if(err.status === 401 || err.status === 403) {
                logOut()
                .then(() => {
                    Swal.fire({
                        title: "your token is expired Please login again",
                        icon: "success",
                        draggable: true
                      });
                    navigate('/signIn')
                })
            }

            return Promise.reject(err);
        })
    },[logOut, navigate])



    return axiosInstance;
};

export default useAxiosSecure;