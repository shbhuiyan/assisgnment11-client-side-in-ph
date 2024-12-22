import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Signin = () => {

  const {setUser , oldUser , google} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLoginForm = e => {
    e.preventDefault()

    const form = new FormData(e.target)
    const email = form.get("email")
    const password = form.get("password")

    oldUser(email , password)
    .then(result => {
      const user = result.user;
      setUser(user);
      toast.success(`welcome back Mr.${user?.displayName || "Anonymous"}` , {position:"top-center"});
      navigate(location?.state ? location.state : '/');
    })
    .catch(err => {
      {
        err ? toast.error("Please SignUp First" , {position:"top-center"}) : ""
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
      navigate(location?.state ? location.state : '/');
    })
    .catch(err => {
      {
        err ? toast.error("Please try again later" , {position:"top-center"}) : ""
      }
    })

  }


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLoginForm} className="space-y-4">
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
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm text-sm font-medium"
        >
          Login
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="mt-4 w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-sm text-sm font-medium"
      >
        Login with Google
      </button>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 hover:underline font-medium"
        >
          Register
        </Link>
      </p>
    </div>
  );
};
  

export default Signin;