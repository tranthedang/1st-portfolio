"use client";
import React, { useState, useEffect, useRef } from "react";

function Card(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  const cardRef = useRef(null);

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);
  }, []);

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${props.dataImage})`,
  };

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - cardRef.current.offsetLeft - width / 2);
    setMouseY(e.pageY - cardRef.current.offsetTop - height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000)
    );
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div
          className="card-bg"
          style={{ ...cardBgTransform, ...cardBgImage }}
        ></div>
        <div className="card-info">
          {props.header}
          {props.content}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="app" className="container1">
      <Card
        dataImage="https://source.unsplash.com/WEQbe2jBg40/"
        header={<h1>Card One</h1>}
        content={<p>This is a card.</p>}
      />
      <Card
        dataImage="https://source.unsplash.com/WEQbe2jBg40/"
        header={<h1>Card Two</h1>}
        content={<p>This is a card.</p>}
      />
      <Card
        dataImage="https://source.unsplash.com/WEQbe2jBg40/"
        header={<h1>Card Three</h1>}
        content={<p>This is a card.</p>}
      />
      <Card
        dataImage="https://source.unsplash.com/WEQbe2jBg40/"
        header={<h1>Card Three</h1>}
        content={<p>This is a card.</p>}
      />
      <Card
        dataImage="https://source.unsplash.com/WEQbe2jBg40/"
        header={<h1>Card Three</h1>}
        content={<p>This is a card.</p>}
      />
      <Card
        dataImage="https://source.unsplash.com/WEQbe2jBg40/"
        header={<h1>Card Three</h1>}
        content={<p>This is a card.</p>}
      />
    </div>
  );
}

export default App;
