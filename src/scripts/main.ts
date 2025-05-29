import "../styles/main.scss";
import Header from "./components/header";
import Scroll from "./scroll";
import BackTopButton from "./components/back-top-button";

document.addEventListener("DOMContentLoaded", () => {
  new Header();
  new BackTopButton(900, "top");
  const scroll = new Scroll();

  scroll.initSmoothScroll();
  scroll.initAOS();
});
