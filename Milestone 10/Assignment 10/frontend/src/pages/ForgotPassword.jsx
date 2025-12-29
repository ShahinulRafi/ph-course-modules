import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../firebase/firebase.init";
import { Link, Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  // const [user, setUser] = useState(null);
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");
  const emailRef = useRef();
  const location = useLocation();
  console.log("login location", location?.state);

  const ForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot Password Clicked");
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        // alert("Password reset email sent. Please check your inbox.");
        toast.success("Password reset email sent. Please check your inbox.");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <title>Forgot Password - Kids Toy Store</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-full lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={ForgotPassword}>
                <fieldset className="fieldset">
                  <label className="label">
                    Enter your email to reset your password
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    ref={emailRef}
                    defaultValue={location?.state?.email || ""}
                  />

                  <button className="btn btn-secondary mt-4">
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                      Reset Password
                    </a>
                  </button>
                </fieldset>

                {/* <div>
                  {success && <p className="text-green-500">{success}</p>}
                  {error && <p className="text-red-500">{error}</p>}
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div>{user && <h2>{user.displayName}</h2>}</div> */}
    </div>
  );
};

export default ForgotPassword;
