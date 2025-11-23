import React from "react";
import "../styles/theme.css";
import "../styles/About.css";
import cuteImg from "../assets/aboutimg.jpeg"; // change name if needed

export default function About() {
  return (
    <div className="about-page">
      {/* Header fixed */}
      <header className="main-header">
        <h2 className="logo">DESIKA SEKAR</h2>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Content Section */}
      <div className="about-container">
        {/* LEFT SIDE IMAGE */}
        <div className="about-left">
          <img src={cuteImg} alt="About" className="about-img" />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="about-right fade-in-text">
          <h1 className="about-title">About Me</h1>
          <p>
            Hello! I’m <b>Desika Sekar</b>, a passionate  
            <span className="highlight"> Full Stack Developer </span>  
            and cute aesthetic web designer.
          </p>
          <p>
            My goal is to build digital experiences
            that are visually engaging, fast, and user-focused.
            I specialize in transforming ideas into functional web interfaces
            using strong design sense, responsive layouts, and modern UI/UX
            principles. I focus on pixel-perfect design, animations, and
            brand-aligned aesthetics. 
          </p>
        </div>
      </div>
    </div>
  );
}
