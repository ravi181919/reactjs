import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
console.log(user);

  return !user ? (
    <div className="w-full flex items-center justify-center mt-12">
      <h2 className="text-2xl font-bold text-white">Loggin Please</h2>
    </div>
  ) : (
    <div className="w-full flex items-center justify-center mt-12">
      <h2 className="text-2xl font-bold text-white">Hello {user.username}</h2>
    </div>
  );
};

export default Profile;
