import React, { useRef } from "react";
import data from "../data";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import TinderCard from "react-tinder-card";
import { Button } from "antd";
import { HeartFilled, DislikeFilled, SmileFilled } from "@ant-design/icons";
import Count from "../components/Count";

const Home = () => {
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

  const divRef = useRef(null);
  console.log("⭐ ~ file: Card.js:22 ~ Card ~ divRef:", divRef.current);
  document.getElementById("app");

  function swiped(direction, category) {
    // console.log("🚀category:", category);

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
      {/* <NavLink to="/member">Member</NavLink> */}
      {/* <NavLink to="/add">AddCard</NavLink> */}
      <NavLink to="/edit">EditCard</NavLink>
      <div className="app" ref={divRef}>
        <div
          className="container"
          style={{
            position: `relative`,
            height: `50vh`,
            maxHeight: `60vw`,
            display: `flex`,
            justifyContent: `center`,
            marginTop: `5vh`,
            margin: `auto`,
          }}
        >
          {animals.map((animal) => (
            <TinderCard
              key={animal.name}
              className="swipe"
              style={{ position: `absolute` }}
              preventSwipe={["up", "down"]}
              onSwipe={(direction) => swiped(direction, animal.category)}
              // onCardLeftScreen={() => leftScreen(animal.name)}
            >
              <div
                className="card"
                style={{
                  backgroundImage: `url(${animal.imgURL})`,
                  position: `relative`,
                  width: `500px`,
                  maxWidth: `85vw`,
                  maxHeight: `60vw`,
                  padding: `20px`,
                  height: `50vh`,
                  boxShadow: `0px 18px 53px 0px rgba(0, 0, 0, 0.3)`,
                  borderRadius: `20px`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  margin: `auto`,
                }}
              >
                <div
                  className="content"
                  style={{
                    position: `absolute`,
                    bottom: `0`,
                    margin: `10px`,
                    padding: `10px`,
                    color: `#fff`,
                  }}
                >
                  <h2 className="text-3xl">{animal.name}</h2>
                  <Count />
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
          <div
            className="btnSet"
            style={{
              position: `absolute`,
              width: `500px`,
              bottom: `-80px`,
              display: `flex`,
              justifyContent: `space-around`,
              margin: `auto`,
            }}
          >
            <Button
              className="btn btn-dislike"
              style={{ backgroundColor: `#595959` }}
              type="primary"
              size="large"
              shape="circle"
              icon={<DislikeFilled />}
            />
            <Link to="/member">
              <Button
                className="btn btn-member"
                style={{ backgroundColor: `#ffe58f` }}
                type="primary "
                shape="circle "
                size="large"
                icon={<SmileFilled />}
              />
            </Link>

            <Button
              className="btn btn-like"
              style={{ backgroundColor: `#ff7875` }}
              type="primary"
              size="large"
              shape="circle"
              icon={<HeartFilled />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
