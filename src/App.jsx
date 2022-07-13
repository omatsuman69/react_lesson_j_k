import React from "react";
import ReactDom from "react-dom";

const App = () => {
  const onClickButton = () => alert("こんにちは！");
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 sytle={{ color: "red" }}>こんにちは！</h1>
      <p sytple={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
