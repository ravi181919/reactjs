import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/ravi181919")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setdata(data);
  //     });
  // }, []);

  const data = useLoaderData();
  return (
    <div className="min-h-[450px] min-w-32 rounded-md text-white bg-[#1e1e1e] grid place-items-center">
      <div className="text-whit  h-auto w-auto p-5 rounded-md flex items-center flex-col ">
        <img
          src={data.avatar_url}
          alt="Github_image"
          className="rounded-full h-24 w-24 "
        />
        <h2 className="font-medium leading-none text-sm">
          Name: <span className="text-sm ">{data.name}</span>
        </h2>
        <h2 className="font-medium text-sm">
          Reposiroties: <span className="">{data.public_repos}</span>
        </h2>
        <p className="text-xs font-medium tracking-wide w-60 mt-2">
          {data.bio}
        </p>
      </div>
    </div>
  );
}

export default Github;
export const githubInfo = async () => {
  const res = await fetch("https://api.github.com/users/ravi181919");
  return res.json();
};
