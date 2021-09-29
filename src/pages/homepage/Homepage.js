import Navbar from "../../components/Navbar/navbar";
import {
  Gmail,
  LinkidIn,
  Github,
  DoubleArrow,
} from "../../components/Icons/index";

import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage__container">
      <div className="home__header">
        <div className="logo__wrap">
          <span className="logo">anupamtirkey.dev</span>
        </div>
      </div>
      <div className="main__content">
        <div className="main__wrap">
          <div className="bigtext__wrap">
            <span
              data-scroll
              data-scroll-speed="3"
              data-scroll-direction="vertical"
              className="bigtext"
            >
              Front-end
            </span>
            <span
              data-scroll
              data-scroll-speed="-3"
              data-scroll-direction="vertical"
              className="bigtext"
            >
              DEVELOPER.
            </span>
          </div>
          <div className="hc_nav">
            <Navbar />
            <DoubleArrow width={30} height={30} className="double__arrow" />
          </div>
        </div>
      </div>
      <div className="social__container">
        <div className="social__wrap">
          <Github className="social__icon" />
          <LinkidIn className="social__icon" />
          <Gmail className="social__icon" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
