import "../styles/main.scss";
import Header from "./components/header";
import Scroll from "./scroll";
import BackTopButton from "./components/back-top-button";
import AccordionCollection from "./components/accordion";
import CardsSlider from "./components/sliders/cards-slider";
import MeetPartnersSlider from "./components/sliders/meet-experts";
import AboutHeroSlider from "./components/sliders/about-hero";
import PartnersSlider from "./components/sliders/partners-slider";
import TeamSlider from "./components/sliders/team";
import { initModal } from "./modal";
import initHorAccordion from "./components/hor-accordion";
import Members from "./components/members";
import ScrollHeader from "./components/scroll-header";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize header
  new Header();

  // Initialize back to top button
  new BackTopButton(900, "top");

  // Initialize scroll header
  new ScrollHeader(30);

  // Initialize smooth scroll and AOS
  const scroll = new Scroll();
  scroll.initSmoothScroll();
  scroll.initAOS();

  // Initialize sliders
  new CardsSlider();
  new PartnersSlider();
  new MeetPartnersSlider();
  new AboutHeroSlider();
  new TeamSlider();

  // Initialize accordions
  new AccordionCollection();

  // Initialize modal
  initModal({
    disableScroll: true,
    disableFocus: true,
    onShow: () => scroll.lenis?.stop(),
    onClose: () => scroll.lenis?.start(),
  });

  // Initialize members section
  new Members();

  // Initialize horizontal accordion
  initHorAccordion();
});
