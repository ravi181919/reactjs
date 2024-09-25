import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Loggin = () => {
  const [username, setUsername] = React.useState("");
  const [userpassword, setUserpassword] = React.useState("");
  const {setUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, userpassword})
  };
  return (
    <div className="w-full min-h-52 flex items-center justify-center flex-col mt-10">
      <div className="flex flex-col gap=4">
        <h3 className="text-zinc-300 font-medium">Name:</h3>
        <input
          type="text"
          value={username}
          placeholder="Enter name"
          className="pl-3 pr-10 py-2 w-full text-sm bg-black text-white  outline-none border-white border-b[1px] "
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-zinc-300 font-medium">Password:</h3>
        <input
          type="text"
          value={userpassword}
          placeholder="Enter password"
          className="pl-3 pr-10 py-2 w-full text-sm text-white  bg-black border-white border-b[2px] "
          onChange={(e) => setUserpassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit} className="mt-5 rounded-md py-2 px-3 text-sm font-medium bg-zinc-100 text-zinc-900">
        Submit
      </button>
    </div>
  );
};

export default Loggin;
