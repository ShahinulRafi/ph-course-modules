import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    if(!name && !photoURL){
      toast.error("Name and Photo URL cannot be empty.");
      return;
    }
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        toast.error("Error updating profile: " + err.message);
      });
  };

  return (
    <div>
      <title>Profile - Kids Toy Store</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* User info text */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">My Profile</h1>
            <p className="py-6">
              Here’s your account information. You can update your name or
              profile photo anytime. The changes are securely saved in Firebase.
            </p>
          </div>

          {/* Profile card */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              {/* Current Info */}
              <div className="flex flex-col items-center mb-6">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
                )}
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="text-gray-500">{user?.email}</p>
              </div>

              {/* Update Form */}
              <form onSubmit={handleUpdate}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                    necessary
                    placeholder="Your Name"
                  />

                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="input"
                    necessary
                    placeholder="Photo URL"
                  />

                  <button className="btn btn-secondary mt-4">Save Changes</button>
                </fieldset>

                {error && <p className="text-red-500">{error}</p>}
                {success && (
                  <p className="text-green-500">
                    Profile updated successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
