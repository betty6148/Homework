/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import TinderCard from "react-tinder-card";
import { Button } from "antd";
import { TDataItem } from "../types";

import {
  HeartFilled,
  DislikeFilled,
  SmileFilled,
  UserOutlined,
} from "@ant-design/icons";
import Count from "../components/Count";

const Home = ({ list }: { list: TDataItem[] }) => {
  console.log("⭐ ~ file: Home.tsx:25 ~ list:", list);

  // const [animals, setAnimals] = useState<TDataItem[]>([]);
  const [userLike, setUserLike] = useState<string[]>([]);
  const [userDisLike, setUserDisLike] = useState<string[]>([]);
  const [likeNum, setLikeNum] = useState(0);
  const [disLikeNum, setDisLikeNum] = useState(0);

  const handleLike = () => {
    setLikeNum(likeNum + 1);
  };
  const handleDisLike = () => {
    setDisLikeNum(disLikeNum + 1);
  };

  //   console.log(animals);

  const divRef = useRef(null);
  // console.log("⭐ ~ file: Card.js:22 ~ Card ~ divRef:", divRef.current);
  document.getElementById("app");

  function swiped(direction: string, category: string) {
    direction === "right"
      ? setUserLike([...userLike, category])
      : setUserDisLike([...userDisLike, category]);
  }

  // console.log("🚀 userLike:", userLike);
  // console.log("🚀 userDisLike:", userDisLike);

  return (
    <>
      <NavLink to="/login">
        <UserOutlined />
      </NavLink>
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
          {list.map((item) => (
            <TinderCard
              key={item.name}
              className="swipe absolute"
              preventSwipe={["up", "down"]}
              onSwipe={(direction) => swiped(direction, item.category)}
              flickOnSwipe={true}
              // onCardLeftScreen={() => leftScreen(animal.name)}
            >
              <div
                className="card"
                style={{
                  backgroundImage: `url(${item.imgURL})`,
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
                  <h2 className="text-3xl">{item.name}</h2>
                  <Count like={likeNum} dislike={disLikeNum} />
                  <p>{item.description}</p>
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
              onClick={handleDisLike}
            />
            <Link to="/member">
              <Button
                className="btn btn-member"
                style={{ backgroundColor: `#ffe58f` }}
                type="primary"
                shape="circle"
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
              onClick={handleLike}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
