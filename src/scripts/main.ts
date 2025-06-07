import "../styles/main.scss";
import Header from "./ui-components/header";
import BackTopButton from "./ui-components/back-top-button";
import AccordionCollection from "./ui-components/accordion";
import { AboutHero, Cards, MeetExperts, Partners, Team } from "./sliders";
import initHorAccordion from "./ui-components/hor-accordion";
import Members from "./ui-components/members";
import ScrollHeader from "./ui-components/scroll-header";
import Scroll from "./scroll";
import { initModal } from "./modal";

const scroll = new Scroll();

const initScrollServices = () => {
  scroll.initSmoothScroll();
  scroll.initAOS();
};

const initSliders = () => {
  new AboutHero();
  new Cards();
  new MeetExperts();
  new Partners();
  new Team();
};

const initUIComponents = () => {
  new Header(scroll);
  new BackTopButton(900, "top");
  new ScrollHeader(30);
  new Members(scroll);
  new AccordionCollection();
  initHorAccordion();
  initModal(scroll);
};

document.addEventListener("DOMContentLoaded", () => {
  initSliders();
  initUIComponents();
  initScrollServices();
});
