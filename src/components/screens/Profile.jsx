import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

const Profile = () => {
  const [pics, setPics] = useState([]);
  const { state } = useContext(UserContext);
  useEffect(() => {
    fetch("/myposts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPics(result.myposts);
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "0px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid gray",
        }}
      >
        <div>
          <img
            alt=""
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/s960x960/98445881_1610898382391354_6785399852042813440_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=EVJYVoG1F9kAX9L1vpL&_nc_ht=scontent.fktm5-1.fna&_nc_tp=7&oh=454b03d08d4e0ec082f715570cb6d298&oe=5F578009"
          />
        </div>
        <div>
          <h4>{state ? state.name : "Loading"}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 Posts</h6>
            <h6>1013 Followers </h6>
            <h6>321 Following`</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        {pics.map((pic) => {
          return (
            <img
              className="item"
              src={pic.photo}
              alt={pic.title}
              key={pic._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
