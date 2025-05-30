import "../styles/main.scss";
import Header from "./components/header";
import Scroll from "./scroll";
import BackTopButton from "./components/back-top-button";
import Sliders from "./components/sliders";
import AccordionCollection from "./components/accordion";

document.addEventListener("DOMContentLoaded", () => {
  new Header();
  new Sliders();
  new BackTopButton(900, "top");
  new AccordionCollection();
  const scroll = new Scroll();

  scroll.initSmoothScroll();
  scroll.initAOS();
});
