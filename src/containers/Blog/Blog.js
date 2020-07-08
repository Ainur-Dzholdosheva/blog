import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../components/Post";
import FullPost from "../../containers/Blog/FullPost/FullPost";

export default () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
      //Get only 8 posts

      const data = response.data.slice(0, 8);

      data.forEach((post) => {
        post.author = "Bakyt";
      });

      setPosts(data);
    });
  }, []);

  const postsOutput = posts.map((post) => (
    <Post
      key={post.id}
      title={post.title}
      author={post.author}
      click={(post) => selectedPostId(post.id)}
    />
  ));
  return (
    <div className="Blog">
      <h3>Blog</h3>
      {postsOutput}
      <FullPost id={selectedPostId} />
    </div>
  );
};
