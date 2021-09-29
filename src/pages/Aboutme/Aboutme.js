import React from "react";
import "./aboutme.scss";
import { about, designTools, experties, otherApps } from "./aboutmeData";
import { Gmail, LinkidIn, Github } from "../../components/Icons/index";

function Aboutme() {
  return (
    <div className="aboutme__container" id="aboutme">
      {about.map((about) => (
        <div className="about" key={about.id}>
          <div className="about__profile">
            <img src={about.about_img} style={{ width: 200 }} alt="img" />
            <div className="profile__text">
              <h3 className="about__title">ABOUTME</h3>
              <p>{about.aboutme}</p>
            </div>
            <div className="social__container about__social">
              <div className="social__wrap">
                <Github className="social__icon" />
                <LinkidIn className="social__icon" />
                <Gmail className="social__icon" />
              </div>
            </div>
            <div className="btn__wrap">
              <button className="btn__resume">RESUME</button>
            </div>
          </div>
          <div className="about__skills">
            <div className="about__experties">
              <h3 className="about__title">MY EXPRETIES</h3>
              <div className="level__guide">
                <span>BIGGINER</span>
                <span>INTERMEDIATE</span>
                <span>EXPERT</span>
              </div>
              {experties.map((exprt) => (
                <div key={exprt.id} className="experties">
                  <p>{exprt.exprt}</p>
                  <div className="level__bar">
                    <div className="level__inside" style={exprt.lvl}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="about__design">
              <h3 className="about__title">DESIGN TOOLS</h3>

              {designTools.map((dsgtool) => (
                <p key={dsgtool.id}>{dsgtool.dsg}</p>
              ))}
            </div>
            <div className="about__sftwr">
              <h3 className="about__title">OTHER TOOLS</h3>
              {otherApps.map((oapps) => (
                <p key={oapps.id}>{oapps.sftwr}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Aboutme;
