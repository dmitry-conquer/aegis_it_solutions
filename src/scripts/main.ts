import "../styles/main.scss";
import Header from "./components/header";
import Scroll from "./scroll";
import BackTopButton from "./components/back-top-button";
import AccordionCollection from "./components/accordion";
import CardsSlider from "./components/sliders/cards-slider";
import MeetPartnersSlider from "./components/sliders/meet-experts";
import PartnersSlider from "./components/sliders/partners-slider";
import { initModal } from "./modal";
import MeetExperts from "./components/meet-experts";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize header
  new Header();

  // Initialize back to top button
  new BackTopButton(900, "top");

  // Initialize smooth scroll and AOS
  const scroll = new Scroll();
  scroll.initSmoothScroll();
  scroll.initAOS();

  // Initialize sliders
  new CardsSlider();
  new PartnersSlider();
  new MeetPartnersSlider();

  // Initialize accordions
  new AccordionCollection();

  initModal({
    disableScroll: true,
    disableFocus: true,
    onShow: () => scroll.lenis?.stop(),
    onClose: () => scroll.lenis?.start(),
  });

  new MeetExperts();
});
