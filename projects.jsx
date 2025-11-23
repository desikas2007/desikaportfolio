import React from "react";
import "../styles/Projects.css";
import { Link } from "react-router-dom";

// Importing images
import foodImg from "../assets/foodimage.jpeg";
import portImg from "../assets/portimage.jpeg";
import pothysImg from "../assets/pothysimage.jpeg";

// Front big images
import foodSticker from "../assets/food-sticker.jpeg";
import portSticker from "../assets/port-sticker.jpeg";
import ecomSticker from "../assets/ecom-sticker.jpeg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Food Stall",
      desc: "A cute food ordering app",
      imgFront: foodSticker,
      imgBack: foodImg,
      github: "https://desikas2007.github.io/Food-Stall/",
    },
    {
      id: 2,
      title: "My Portfolio",
      desc: "Personal portfolio website",
      imgFront: portSticker,
      imgBack: portImg,
      github: "https://desikas2007.github.io/PORTFOLIO/",
    },
    {
      id: 3,
      title: "E-commerce website",
      desc: "Online shopping platform",
      imgFront: ecomSticker,
      imgBack: pothysImg,
      github: "https://desikas2007.github.io/pothys-mart/",
    },
  ];

  return (
    <div className="projects-page">

      <header className="main-header">
        <h2 className="logo">DESIKA</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <h1 className="projects-title animated-title">MY PROJECTS</h1>

      <div className="projects-row">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <div className="card-inner">

              {/* FRONT → Big Cover Image */}
              <div className="card-front">
                <img src={p.imgFront} alt={p.title + " cover"} className="front-cover" />
                <div className="front-text">
                  <p className="project-desc">{p.desc}</p>
                  <h2>{p.title}</h2>
                </div>
              </div>

              {/* BACK → Image + Visit Link */}
              <div className="card-back">
                <img src={p.imgBack} alt={p.title} className="back-img" />
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  🔗 View Live
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
