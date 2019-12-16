import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Contents from "./components/Contents/Contents";
import Footer from "./components/Footer/Footer";
import "./styles/global.scss";

ReactDOM.render(
  <article>
    <Header name="boilerplate" />
    <Contents content="contentsProps"/>
    <Footer year={new Date().getFullYear()} />
  </article>,
  document.getElementById("app")
);