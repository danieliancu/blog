import React from "react";
import Articles from "./components/Articles";
import content from "./content";

const Home = () => {
  return (
    <div className="home">
      <img
        className="mainImg"
        src="https://images.pexels.com/photos/8651076/pexels-photo-8651076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <form className="container">
        <h1>This is the headline</h1>
        <input type="text" />
        <button>Search</button>
      </form>
      <div className="container-small">
        <Articles content={content} />
      </div>
    </div>
  );
};

export default Home;
