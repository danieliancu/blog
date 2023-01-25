import React from "react";
import { useParams } from "react-router-dom";
import content from "./content";

const Article = () => {
  const { id } = useParams();
  const article = content.find((item) => item.name === id);
  return (
    <>
      <img
        style={{ width: "100%", height: "300px", backgroundColor: "grey" }}
      />
      <div className="container">
        <h1>{article.title}</h1>
        <h3>{article.content}</h3>
      </div>
    </>
  );
};

export default Article;
