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
  let [title, setTitle] = useState(0);
  let [input, inputChange] = useState("");

  [(1, 2, 3)].map(function (a) {
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
                  setTitle(i);
                }}
              >
                {name[i]}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
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
              <button>수정</button>
              <button
                onClick={() => {
                  let copy = [...name];
                  copy.splice(i, 1);
                  nameChange(copy);
                }}
              >
                삭제
              </button>
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

      <input
        onChange={(e) => {
          inputChange(e.target.value);
          console.log(input);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...name];
          copy.unshift(input);
          nameChange(copy);
        }}
      >
        입력하기
      </button>
      {modal === true ? (
        <Modal
          color="yellow"
          name={name}
          nameChange={nameChange}
          title={title}
        />
      ) : null}

      {/* <Modal2></Modal2> */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.name[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

// // 옛방법
// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "kim",
//       age: 20,
//     };
//   }
//   render() {
//     return (
//       <div>
//         안녕 {this.state.name}
//         <button
//           onClick={() => {
//             this.setState({ age: 21 });
//           }}
//         >
//           버튼
//         </button>
//       </div>
//     );
//   }
// }
export default App;
