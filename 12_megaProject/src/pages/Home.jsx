import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/configuration";
import { Container, Postcard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  // Fetch posts inside useEffect to avoid infinite calls
  useEffect(() => {
    appwriteService
      .getPosts()
      .then((response) => {
        if (response) {
          setPosts(response.documents);
        }
      })
      .catch((error) => console.log("Pages :: Home", error));
  }, []); // Empty dependency array ensures this only runs once after component mounts

  return posts.length === 0 ? (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Login to read posts
            </h1>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
