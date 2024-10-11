import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/configuration";
import { Container, Postcard } from "../components";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts inside useEffect to avoid infinite calls
  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((response) => {
        if (response) {
          setPosts(response.documents);
        }
      })
      .catch((error) => console.log("Pages :: AllPost", error));
  }, []); // Empty dependency array ensures this only runs once after component mounts

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="w-1/4 p-2">
              <Postcard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
