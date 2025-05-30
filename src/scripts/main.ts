import "../styles/main.scss";
import Header from "./components/header";
import Scroll from "./scroll";
import BackTopButton from "./components/back-top-button";
import AccordionCollection from "./components/accordion";
import CardsSlider from "./components/sliders/cards-slider";
import PartnersSlider from "./components/sliders/partners-slider";

document.addEventListener("DOMContentLoaded", () => {
  new Header();
  new CardsSlider();
  new PartnersSlider();
  new BackTopButton(900, "top");
  new AccordionCollection();
  const scroll = new Scroll();

  scroll.initSmoothScroll();
  scroll.initAOS();
});
