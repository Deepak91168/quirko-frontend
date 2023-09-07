import axios from "axios";
import { useEffect, useState } from "react";
import { PostCard } from "../../components/post/PostCard";
const getAllPosts = async (setPosts) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/posts/get-all-posts"
    );
    setPosts(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts(setPosts);
  }, []);
  console.log(posts);
  return (
    <>
      <div>
        <ul>
          {posts.map((post) => (
            <PostCard
              id={post._id}
              key={post._id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
