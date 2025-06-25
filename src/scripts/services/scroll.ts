import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import "lenis/dist/lenis.css";

export default class Scroll {
  private lenis: Lenis | null = null;

  public initSmoothScroll() {
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    if (isTouchDevice) return;

    this.lenis = new Lenis({
      autoRaf: true,
      anchors: true,
    });
  }

  public initAOS() {
    AOS.init({
      duration: 900,
      once: true,
    });
  }

  public bubbleScrollAtEdge() {
    const scrolledElements = document.querySelectorAll("[data-lenis-prevent]") as NodeListOf<HTMLElement>;
    scrolledElements.forEach((element: HTMLElement) => {
      element?.addEventListener(
        "wheel",
        (e: WheelEvent) => {
          const scrollTop = element.scrollTop;
          const scrollHeight = element.scrollHeight;
          const offsetHeight = element.offsetHeight;
          const delta = e.deltaY;

          if (scrollTop + offsetHeight >= scrollHeight && delta > 0) {
            e.preventDefault();
            window.dispatchEvent(new WheelEvent("wheel", { deltaY: delta }));
          }

          if (scrollTop <= 0 && delta < 0) {
            e.preventDefault();
            window.dispatchEvent(new WheelEvent("wheel", { deltaY: delta }));
          }
        },
        { passive: false }
      );
    });
  }

  public stop() {
    this.lenis?.stop();
  }

  public start() {
    this.lenis?.start();
  }

  public getLenis(): Lenis | null {
    return this.lenis;
  }
}
