import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
      });
  }, []);

  return (
    <div className="home">
      {data.map((post) => {
        return (
          <div className="card home-card" key={post._id}>
            <h5> {post.postedBy.name}</h5>
            <div className="card-image">
              <img src={post.photo} alt="wallpaper" />
            </div>
            <div className="card-content">
              <i className="small  material-icons" style={{ color: "red" }}>
                favorite
              </i>

              <h6>{post.title}</h6>
              <p>{post.body}</p>
              <input type="text" placeholder="Add Comments" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
