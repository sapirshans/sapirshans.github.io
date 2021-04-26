import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Content from "./components/content";
// import Navigation from './components/navigation';
import { motion, useMotionValue, useTransform } from "framer-motion";
import $ from "jquery";

//APP
function App() {
  // THIS IS FOR THE MOVING BG
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const speed = 25;
  const sign = Math.random() > 0.5 ? 1 : -1;
  const motionX = (Math.floor(Math.random() * speed) + 1) * sign;
  const motionY = (Math.floor(Math.random() * speed) + 1) * sign;

  const midX = $(window).innerWidth() / 2;
  const midY = $(window).innerHeight() / 2;

  var moveX = useTransform(x, (latest) => 20 * ((midX - latest) / midX));
  var moveY = useTransform(y, (latest) => 20 * ((midY - latest) / midY));

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  var svg_shapes = [];
  var i;

  for (i = 0; i < 18; i++) {
    var r = Math.floor(Math.random() * 17) + 1; // radii between 1 and 10
    var cx = Math.floor(Math.random() * $(window).innerWidth()); // get random point
    var cy = Math.floor(Math.random() * $(window).innerHeight());
    var stroke = Math.floor(Math.random() * 2) + 1; // stroke width between 1 and 3

    var fills = ["None", "rgb(0,0,0,.5)"];
    var fill = fills[Math.floor(Math.random() * fills.length)];

    svg_shapes.push(
      <motion.circle
        r={r}
        cx={cx}
        cy={cy}
        fill={fill}
        stroke={fill == "None" ? "rgb(0,0,0,0.5)" : "None"}
        strokeWidth={stroke}
        initial={{ cx: cx, cy: cy }}
        animate={{ cx: cx + motionX, cy: cy + motionY }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
        style={{
          x: moveX,
          y: moveY,
        }}
      ></motion.circle>
    );

    var x1 = Math.floor(Math.random() * $(window).innerWidth());
    var y1 = Math.floor(Math.random() * $(window).innerHeight());
    var len = Math.floor(Math.random() * 7) + 7;

    svg_shapes.push(
      <g>
        <motion.line
          x1={x1}
          x2={x1 + len}
          y1={y1}
          y2={y1}
          stroke="rgb(0,0,0,.5)"
          initial={{ x1: x1, x2: x1 + len, y1: y1, y2: y1 }}
          animate={{
            x1: x1 + motionX,
            x2: x1 + len + motionX,
            y1: y1 + motionY,
            y2: y1 + motionY,
          }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
          style={{
            x: moveX,
            y: moveY,
          }}
        ></motion.line>
        <motion.line
          x1={(x1 * 2 + len) / 2}
          x2={(x1 * 2 + len) / 2}
          y1={len / 2 + y1}
          y2={y1 - len / 2}
          stroke="rgb(0,0,0,.5)"
          initial={{
            x1: (x1 * 2 + len) / 2,
            x2: (x1 * 2 + len) / 2,
            y1: len / 2 + y1,
            y2: y1 - len / 2,
          }}
          animate={{
            x1: (x1 * 2 + len) / 2 + motionX,
            x2: (x1 * 2 + len) / 2 + motionX,
            y1: len / 2 + y1 + motionY,
            y2: y1 - len / 2 + motionY,
          }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
          style={{
            x: moveX,
            y: moveY,
          }}
        ></motion.line>
      </g>
    );
  }

  return (
    <div onMouseMove={handleMouse}>
      <script src="jquery-3.5.1.min.js"></script>
      <svg width="100%" height="100%">
        {svg_shapes}
      </svg>
      <Content></Content>
    </div>
  );
}

export default App;
