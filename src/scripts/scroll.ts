import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import "lenis/dist/lenis.css";

export default class Scroll {
  private lenis: Lenis | null = null;

  public initSmoothScroll() {
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
