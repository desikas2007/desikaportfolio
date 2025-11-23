


import React from "react";
import "../styles/theme.css";
import "../styles/Home.css";   // if Home.css is also inside styles


// Import your cute anime image here
import cuteImg from "../assets/homecute.jpeg"; // replace with your actual filename

export default function Home() {
  return (
    <div className="home-page">
      {/* HEADER ON TOP */}
      <header className="header-bar">
        <h2 className="logo">DESIKA PORTFOLIO</h2>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* MAIN HOME CONTENT */}
      <div className="home-container">

        {/* LEFT SIDE IMAGE */}
        <div className="home-left">
          <img src={cuteImg} className="home-sticker" alt="cute anime" />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="home-right">
          <h1 className="name-title">DESIKA SEKAR</h1>

          <div className="animated-titles">
            <span className="word">WEB DESIGNER</span>
            <span className="word">FULL STACK DEVELOPER</span>
          </div>
        </div>
      </div>
    </div>
  );
}
