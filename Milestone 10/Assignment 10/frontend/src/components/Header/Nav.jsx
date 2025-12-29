import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Nav = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then()
      .catch((error) => alert(error.message));
  };
  return (
    <div className="">
      <div className="bg-base-100 shadow-sm">
        <div className="navbar  w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>
                    <NavLink to="/">Home</NavLink>
                  </a>
                </li>
                <li>
                  <a>
                    <NavLink to="/alltoys">All Toys</NavLink>
                  </a>
                </li>
                <li>
                  <a>
                    <NavLink to="/mytoys">My Toys</NavLink>
                  </a>
                </li>

                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl -mx-4 md:mx-1">
              <NavLink to="/">Kids Toy Store</NavLink>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>
                  <NavLink to="/">Home</NavLink>
                </a>
              </li>
              <li>
                <a>
                  <NavLink to="/alltoys">All Toys</NavLink>
                </a>
              </li>
              <li>
                <a>
                  <NavLink to="/mytoys">My Toys</NavLink>
                </a>
              </li>

              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <a onClick={handleSignOut} className="btn">
                <div className="flex gap-2 justify-between items-center">
                  <div>
                    <img
                      className="w-4 rounded"
                      title={user.displayName}
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <div>Sign Out</div>
                </div>
              </a>
            ) : (
              <a className="btn">
                <NavLink to="/login">Login</NavLink>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
