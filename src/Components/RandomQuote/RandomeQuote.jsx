import React, { useState } from "react";
import "./RandomeQuote.css";
import next_icon from "../Assets/next.png";

export default function RandomeQuote() {
  const [joke, setJoke] = useState({
    setup: "Why don't skeletons ever fight each other?",
    delivery: "They don't have the guts!",
  });

  // Fetch joke API
  const fetchjoke = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();

    if (data.type === "single") {
      setJoke({ setup: data.joke, delivery: "" });
    } else if (data.type === "twopart") {
      setJoke({ setup: data.setup, delivery: data.delivery });
    }
  };

  return (
    <div className="container">
      <div className="joke">
        {joke.setup}
        {joke.delivery && <span> - {joke.delivery}</span>}{" "}
      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="icons">
          <img src={next_icon} alt="next" onClick={fetchjoke} />
        </div>
      </div>
    </div>
  );
}
