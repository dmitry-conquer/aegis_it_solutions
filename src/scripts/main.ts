import "../styles/main.scss";
import { AboutHero, Cards, MeetExperts, Partners, Team } from "./sliders";
import {
  Accordion,
  Header,
  BackTopButton,
  Members,
  ScrollHeader,
  HorizontalAccordion,
  Tabs,
  UseTyped,
} from "./components";
import { Scroll } from "./services";
import { initModal } from "./utils";

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
  new Accordion();
  new Tabs();
  HorizontalAccordion();
  initModal(scroll);
};

document.addEventListener("DOMContentLoaded", () => {
  initSliders();
  initUIComponents();
  initScrollServices();

  const typedElements = document.querySelectorAll<HTMLElement>("[data-typed-string]");
  typedElements.forEach(el => new UseTyped(el));
});
