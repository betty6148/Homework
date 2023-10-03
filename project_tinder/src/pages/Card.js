import React from "react";
import data from "../data";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TinderCard from "react-tinder-card";
import { Button } from "antd";
import { HeartFilled, DislikeFilled, SmileFilled } from "@ant-design/icons";
const Card = () => {
  const [animals, setAnimals] = useState([]);
  const [userLike, setUserLike] = useState([]);
  const [userDisLike, setUserDisLike] = useState([]);
  //   console.log(animals);

  useEffect(() => {
    // console.log(data?.[0]?.imgURL);
    setAnimals(data);
    // console.log(animals?.[0]?.name);
    // return data;
  }, []);

  function swiped(direction, category) {
    console.log("🚀category:", category);

    // if (direction === "right") setUserLike([...userLike, category]);
    // else setUserDisLike([...userDisLike, category]);
    direction === "right"
      ? setUserLike([...userLike, category])
      : setUserDisLike([...userDisLike, category]);
  }

  console.log("🚀 userLike:", userLike);
  console.log("🚀 userDisLike:", userDisLike);

  //function leftScreen(name) {
  //   console.log(name);
  // }

  return (
    <>
      <NavLink to="/login">LogIn</NavLink>
      <div className="app">
        <div className="container">
          {animals.map((animal) => (
            <TinderCard
              key={animal.name}
              className="swipe"
              preventSwipe={["up", "down"]}
              onSwipe={(direction) => swiped(direction, animal.category)}
              // onCardLeftScreen={() => leftScreen(animal.name)}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${animal.imgURL})` }}
              >
                <div className="content">
                  <h2>{animal.name}</h2>
                  <HeartFilled />
                  <DislikeFilled />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officiis, perspiciatis maxime repellendus corrupti provident
                    totam animi officia autem quo id sed modi, tenetur assumenda
                    suscipit nihil expedita libero at debitis.
                  </p>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className="btnSet">
          <Button
            className="btn btn-dislike"
            type="primary"
            size="large"
            shape="circle"
            icon={<DislikeFilled />}
          />
          <Button
            className="btn btn-member"
            type="primary "
            shape="circle "
            size="large"
            icon={<SmileFilled />}
          />
          <Button
            className="btn btn-like"
            type="primary"
            size="large"
            shape="circle"
            icon={<HeartFilled />}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
