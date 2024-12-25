import { useContext } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Profile from "../Profile/Profile";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import logo from "../../Assets/ask-me.png"

const Navbar = () => {
  const { user, logOut , setDarkTheme , darkTheme} = useContext(AuthContext);

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
            <NavLink to={"/forMe"}>Recommendation For Me </NavLink>
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
    <div className="flex justify-between items-center py-2 px-4">
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

        {/* theme controller */}
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" data-tooltip-id="user-tooltip" data-tooltip-place="bottom" data-tooltip-variant="info" data-tooltip-content={`${darkTheme ? "Light" : "Dark"}`} onClick={()=>setDarkTheme(!darkTheme)} />

        {/* sun icon */}
        <svg
          className="swap-on h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-off h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>

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
            <ul className={`${darkTheme ? "dark-theme menu text-base-content min-h-full w-40 md:w-80 p-4 z-50" : "menu bg-base-200 text-base-content min-h-full w-40 md:w-80 p-4 z-50"}`}>
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