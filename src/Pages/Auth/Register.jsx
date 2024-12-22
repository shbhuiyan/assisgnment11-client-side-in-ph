import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [passErr , setPassErr] = useState(false)

  const {setUser , createUser , google , update} = useContext(AuthContext)
  const navigate = useNavigate()

  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');


  const handleRegisterForm = e => {
    e.preventDefault()


    const form = new FormData(e.target)
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")

      if(!validPassword.test(password)){
        setPassErr(true)
        return
      }

    createUser(email , password , name , photo)
    .then(result => {
      const user = result.user;
      setUser(user)
      update(name , photo)
      toast.success("Congrats you create an account" , {position:"top-center"})
      navigate('/')
    })
    .catch(err => {
      {
        err ? toast.error("This email already in use" , {position:"top-center"}) : ""
      }
    })
    
  }

  const handleGoogleLogin = e => {
    e.preventDefault()

    google()
    .then(result => {
      const user = result.user;
      setUser(user);
      toast.success("Successfully Login" , {position:"top-center"})
      navigate('/')
    })
    .catch(err => {
      {
        err ? toast.error("Please try again later" , {position:"top-center"}) : ""
      }
    })

  }


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleRegisterForm} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo URL:
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            placeholder="photo URL"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <p className={`${passErr ? "text-red-600 text-sm p-1" : "hidden p-1 text-sm"}`}>Password must be at least 6 characters & A-Z & a-z & 0-9</p>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm text-sm font-medium"
        >
          Register
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="mt-4 w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-sm text-sm font-medium"
      >
        Register with Google
      </button>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="text-blue-600 hover:underline font-medium"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

  

export default Register;