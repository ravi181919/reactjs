import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  return (
    <div className="min-h-64 p-5 bg-gray-500 text-lg font-medium grid place-items-center">
      UserId: {id}
    </div>
  );
}

export default User;
