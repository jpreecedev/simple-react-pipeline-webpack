import React from "react";
import { hot } from "react-hot-loader/root";
import Counter from "./counter.js";

import img from "./img/jonpreece-square.png";

function App() {
  return (
    <>
      <img src={img} alt="Jon Preece" />
      <Counter count={10} />
    </>
  );
}

export default hot(App);
