import React from "react";
import styled from "styled-components";
import Head from "./components/Head";
import Section from "./components/Section";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Head />
      <Home />
      {/* <Section /> */}
    </div>
  );
}

export default App;
