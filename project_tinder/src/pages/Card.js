import React from "react";
import "../App.css";
import data from "../data";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TinderCard from "react-tinder-card";

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
        <h1>Tinder Cards</h1>
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
                <h3>{animal.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
