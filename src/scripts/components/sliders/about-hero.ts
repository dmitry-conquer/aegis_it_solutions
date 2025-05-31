export default class AboutHeroSlider {
  private readonly selector: string = "#about-hero-slider";
  private headings: HTMLElement[];
  private swiper: any;

  constructor() {
    this.headings = Array.from(document.querySelectorAll(".about-hero__aside-item"));
    this.initSwiper();
  }

  private getOptions() {
    return {
      speed: 1900,
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      parallax: true,
      autoHeight: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      mousewheel: true,
      breakpoints: {
        0: {
          direction: "horizontal",
        },
        768: {
          direction: "vertical",
        },
      },
      on: {
        slideChange: () => this.onSlideChange(),
        afterInit: () => this.onSlideChange(),
      },
    };
  }

  private onSlideChange() {
    this.updateProgressBar();
    this.upadatePoints();
  }

  private upadatePoints() {
    if (!this.headings || !this.swiper) return;

    const activeIndex = this.swiper.activeIndex;
    const activeEls = this.headings.slice(0, activeIndex + 1);
    activeEls.forEach((heading, index) => {
      heading.classList.add("active");
    });
    const inactiveEls = this.headings.slice(activeIndex + 1);
    inactiveEls.forEach(heading => {
      heading.classList.remove("active");
    });
  }

  private updateProgressBar() {
    if (!this.swiper) return;
    const total = this.swiper.slides.length;
    const current = this.swiper.activeIndex + 1;
    const percent = (current / total) * 100;
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = percent + "%";
    }
  }

  private initSwiper() {
    const el = document.querySelector(this.selector);
    if (!el) return;

    // @ts-expect-error Swiper is global
    if (typeof Swiper !== "undefined") {
      // @ts-expect-error Swiper is global
      this.swiper = new Swiper(this.selector, this.getOptions());
      this.updateProgressBar();
    }
  }
}
