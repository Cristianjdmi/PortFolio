import React from "react";
import { ReactComponent as Battery } from "./svg/battery.svg";
import { ReactComponent as Bike } from "./svg/bike.svg";
import { ReactComponent as Cloud } from "./svg/cloud.svg";
import { ReactComponent as Code } from "./svg/code.svg";
import { ReactComponent as Coffee } from "./svg/coffee.svg";
import { ReactComponent as Flask } from "./svg/flask.svg";
import { ReactComponent as Game } from "./svg/game.svg";
import { ReactComponent as Git } from "./svg/git.svg";
import { ReactComponent as Heart } from "./svg/heart.svg";
import { ReactComponent as Home } from "./svg/home.svg";
import { ReactComponent as Html } from "./svg/html.svg";
import { ReactComponent as JS } from "./svg/js.svg";
import { ReactComponent as Keyboard } from "./svg/keyboard.svg";
import { ReactComponent as Mic } from "./svg/mic.svg";
import { ReactComponent as Paper } from "./svg/paper.svg";
import { ReactComponent as ReactSVG } from "./svg/react.svg";
import { ReactComponent as Sql } from "./svg/sql.svg";
import { ReactComponent as Time } from "./svg/time.svg";
import { ReactComponent as Web } from "./svg/web.svg";
import { ReactComponent as Weight } from "./svg/weight.svg";
import "./AnimatedBackground.css";

const AnimatedBackground = ({ children }) => {
  let arr = [];
  let qty = 15;

  for (let i = 0; i < qty; i++) {
    arr.push(i)
  }
  const layers = arr.map(i=> {
    return(
      <div key={i} className="animated-row">
          <div>
            <Battery /> 
            <Bike /> 
            <Cloud /> 
            <Code /> 
            <Coffee /> 
            <JS /> 
            <Flask /> 
            <Game /> 
            <Git /> 
            <ReactSVG /> 
            <Heart /> 
            <Home /> 
            <Html /> 
            <Keyboard /> 
            <Mic /> 
            <Paper /> 
            <Sql /> 
            <Time /> 
            <Web /> 
            <Weight /> 
             
          </div>

          <div>
            <Battery /> 
            <Bike /> 
            <Cloud /> 
            <Code /> 
            <Coffee /> 
            <JS /> 
            <Flask /> 
            <Game /> 
            <Git /> 
            <ReactSVG /> 
            <Heart /> 
            <Home /> 
            <Html /> 
            <Keyboard /> 
            <Mic /> 
            <Paper /> 
            <Sql /> 
            <Time /> 
            <Web /> 
            <Weight /> 
             
          </div>
      </div>
    )
  })
	return (
    <section className='animated-section'>
      {layers}
      {children}
    </section>
  );
};

export default AnimatedBackground;
