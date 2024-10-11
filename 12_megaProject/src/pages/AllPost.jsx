import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/configuration";
import { Container, Postcard } from "../components";
const AllPost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {}, []);
  appwriteService
    .getPosts([])
    .then((post) => {
      if (post) {
        setPost(post.documents);
      }
    })
    .catch((Error) => console.log("Pages :: AllPost", Error));
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => ( 
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
