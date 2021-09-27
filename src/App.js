import React, { useRef, useEffect } from "react";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

import "./sass/main.scss";

import Homepage from "./pages/homepage/Homepage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Aboutme from "./pages/Aboutme/Aboutme";
import locomotiveScroll from "locomotive-scroll/src/locomotive-scroll";

// const useViewport = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   useState(() => {
//     const handleWindowResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleWindowResize);
//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);

//   return { width };
// };

function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      new locomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
        multiplier: "1",
      });
    }
  });

  return (
    <main data-scroll-container ref={ref}>
      <section data-scroll-section>
        <Homepage />
      </section>
      <section data-scroll-section>
        <Portfolio />
      </section>
      <section data-scroll-section>
        <Aboutme />
      </section>
    </main>
  );
}

export default App;
