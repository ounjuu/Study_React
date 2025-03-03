/* eslint-disable */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  let [name, nameChange] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  let [heart, heartChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  [1, 2, 3].map(function (a) {
    return "12313231";
  });
  return (
    <div>
      <div className="App">
        <div className="black-nav">
          <h4 style={{ fontSize: "16px" }}>{logo}</h4>
        </div>
        {/* <div className="list">
          <h4>
            {name[0]}
            <span
              onClick={() => {
                heartChange(heart + 1);
              }}
            >
              🤍
            </span>{" "}
            {heart}
          </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{name[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4
            onClick={() => {
              setModal(!modal);
            }}
          >
            {name[2]}
          </h4>
          <p>2월 17일 발행</p>
        </div> */}
        {name.map(function (a, i) {
          return (
            <div className="list" key="i">
              <h4
                onClick={() => {
                  setModal(!modal);
                }}
              >
                {name[i]}
                <span
                  onClick={() => {
                    let heartCopy = [...heart];
                    heartCopy[i] = heartCopy[i] + 1;
                    heartChange(heartCopy);
                  }}
                >
                  🤍
                </span>{" "}
                {heart[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })}

        <button
          onClick={() => {
            let makesort = [...name];
            nameChange(makesort.sort());
          }}
        >
          가나다순정렬
        </button>
        <button
          onClick={() => {
            let copy = [...name];
            copy[0] = "여자 코트 추천";
            nameChange(copy);
          }}
        >
          글수정
        </button>
      </div>
      {modal === true ? (
        <Modal color="yellow" name={name} nameChange={nameChange} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.name[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.nameChange(["여자코트 추천", "강남 우동 맛집", "파이썬 독학"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}
export default App;
