import "../styles/main.scss";
import Header from "./components/header";
import Scroll from "./scroll";
import BackTopButton from "./components/back-top-button";
import Sliders from "./components/sliders";

document.addEventListener("DOMContentLoaded", () => {
  new Header();
  new Sliders();
  new BackTopButton(900, "top");
  const scroll = new Scroll();

  scroll.initSmoothScroll();
  scroll.initAOS();
});
