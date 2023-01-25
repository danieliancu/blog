import React from "react";
import Articles from "./components/Articles";

const Blog = () => {
  return (
    <div className="blog">
      <img
        className="mainImg"
        src="https://images.pexels.com/photos/4555324/pexels-photo-4555324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="container-small" style={{ marginTop: "300px" }}>
        <Articles content={content} />
      </div>
    </div>
  );
};

export default Blog;
