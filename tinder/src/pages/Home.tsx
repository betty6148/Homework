/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, createRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import TinderCard from "react-tinder-card";
import { Button } from "antd";
import { TData } from "../types";
import { API_URL } from "../utils";
import {
  HeartFilled,
  DislikeFilled,
  SmileFilled,
  UserOutlined,
} from "@ant-design/icons";
import Count from "../components/Count";

let render_count = 0;

const Home = ({ cardList }: { cardList: TData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(cardList.length - 1);
  render_count++;
  console.log("⭐ ~ file: Home.tsx:21 ~ Home ~ render_count:", render_count);

  useEffect(() => {
    if (cardList.length) {
      setCurrentIndex(cardList.length - 1);
    }
  }, [cardList.length]);

  const canSwipe = currentIndex >= 0;

  console.log("⭐  currentIndex:", currentIndex);

  const childRefs = useMemo(
    () =>
      Array(cardList.length)
        .fill(0)
        .map(() => createRef<HTMLDivElement>()),
    [cardList.length]
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
  };

  const swipe = async (dir: "left" | "right") => {
    if (canSwipe && currentIndex < cardList.length) {
      await (childRefs[currentIndex] as any).current.swipe(dir);
    }
  };
  function swiped(direction: string, category: string, index: number) {
    direction === "right"
      ? setUserLike([...userLike, category])
      : setUserDisLike([...userDisLike, category]);
    updateCurrentIndex(index - 1);
  }
  const [userLike, setUserLike] = useState<string[]>([]);
  const [userDisLike, setUserDisLike] = useState<string[]>([]);
  const [likeNum, setLikeNum] = useState(0);
  const [disLikeNum, setDisLikeNum] = useState(0);

  const handleLike = () => {
    setLikeNum(likeNum + 1);
    swipe("right");
  };
  const handleDisLike = () => {
    setDisLikeNum(disLikeNum + 1);
    swipe("left");
  };

  // console.log("🚀 userLike:", userLike);
  // console.log("🚀 userDisLike:", userDisLike);
  return (
    <>
      <NavLink to="/login">
        <UserOutlined />
      </NavLink>
      <div className="app">
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
          {cardList.map((item, index) => (
            <TinderCard
              ref={childRefs[index] as React.Ref<any>}
              key={item.attributes.title}
              className="swipe absolute"
              preventSwipe={["up", "down"]}
              onSwipe={(direction) =>
                swiped(direction, item.attributes.category, index)
              }
              // onCardLeftScreen={() => leftScreen(animal.name)}
            >
              <div
                className="card"
                style={{
                  backgroundImage: `url(${API_URL}${item?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url})`,
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
                    wordWrap: `break-word`,
                    width: `450px`,
                  }}
                >
                  <h2 className="text-3xl">{item.attributes.title}</h2>
                  <Count
                    like={likeNum + item.attributes.like}
                    dislike={disLikeNum + item.attributes.dislike}
                  />
                  <p>{item.attributes.description}</p>
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
