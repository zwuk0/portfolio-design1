import React from "react";
import "./portfolio.scss";
import { projects_data } from "./portfolio-data";
function Portfolio() {
  return (
    <div className="portfolio__container" id="portfolio">
      <div
        data-scroll
        data-scroll-speed="-3"
        data-scroll-direction="vertical"
        className="projects__block"
      >
        {projects_data.map((project) => (
          <div className="project" key={project.id}>
            <img
              className="project__img"
              src={project.img_link}
              style={{ width: 100 + "%" }}
              alt="img"
            />
            <div className="project__text">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__discription">{project.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
