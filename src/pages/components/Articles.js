import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ content }) => {
  return (
    <>
      {content.map((item) => (
        <Link to={`/article/${item.name}`} className="article">
          <img />
          <div>
            <h2>{item.title}</h2>
            <h4>{item.content[0].substring(0, 100)}...</h4>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Articles;
