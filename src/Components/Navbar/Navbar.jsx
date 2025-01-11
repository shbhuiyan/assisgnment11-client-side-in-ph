import { useContext } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Profile from "../Profile/Profile";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import logo from "../../Assets/ask-me.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.warn("Log Out Successfully" , {position:"bottom-center"})
    }).catch(err => {
      {
        err ? toast.error("Please try again later" , {position:"top-center"}) : ""
      }
    })
  }

  const Links = (
    <>
      {
        user?.email ? <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/queries"}>Queries</NavLink>
          </li>
          <li>
            <NavLink to={"/recommendsForMe"}>Recommendation For Me </NavLink>
          </li>
          <li>
            <NavLink to={"/myQueries"}>My Queries</NavLink>
          </li>
          <li>
            <NavLink to={"/recommendations"}>My Recommendation</NavLink>
          </li>
        </> : 
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/queries"}>Queries</NavLink>
          </li>
        </>
      }
    </>
  );

  return (
    <div className="flex justify-between items-center py-2 px-4 sticky top-0 z-50 backdrop-blur-xl">
      <div className="flex items-center">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content backdrop-blur-3xl font-bold rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          {Links}
        </ul>
        
      </div>
      <Link  to={"/"}>
          <img className="w-12 md:w-16" src={logo} alt="" />
        </Link>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium">
          {Links}
        </ul>
      </div>
      <div className="z-50 flex justify-center items-center gap-6">

        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

          {/* Page content here */}
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              data-tooltip-id="user-tooltip"
              data-tooltip-place="top"
              data-tooltip-variant="info"
              data-tooltip-content={
                user && user?.email
                  ? `${user?.displayName || "Set name"}`
                  : "Please Log in"
              }
              className="drawer-button cursor-pointer"
            >
              {user && user?.photoURL ? (
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src={user.photoURL} />
                  </div>
                </div>
              ) : (
                <div className="p-2 ring-2 ring-blue-600 rounded-full">
                  <FaUserLarge className="text-xl text-blue-600" />
                </div>
              )}
            </label>
            <Tooltip id="user-tooltip" />
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-40 md:w-80 p-4 z-50">
              {/* Sidebar content here */}
              {
                user && user?.email ? <div className="">
                  <Profile user={user} />
                  <div className="flex flex-col gap-4">
                    <Link className="font-semibold btn btn-info">Update</Link>
                    <Link to={'/signIn'} onClick={handleLogOut} className="font-semibold btn btn-warning">Log Out</Link>
                  </div> 
                </div> : <Link className="font-semibold btn text-xl btn-warning" to={'/signIn'}>Log In</Link>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;