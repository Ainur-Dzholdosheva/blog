import React, { useState } from "react";

export default ({ id }) => {
  const [post, setPost] = useState({});
  return (
    <article className="FullPost">
      {id}
      <h2>{post.title}</h2>
      <div className="author">{post.author}</div>
      <p>{post.body}</p>
    </article>
  );
};
