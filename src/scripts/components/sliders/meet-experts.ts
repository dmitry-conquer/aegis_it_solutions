export default class MeetPartnersSlider {
  private readonly selector: string = "#meet-experts";

  constructor() {
    this.initSwiper();
  }

  private getOptions() {
    return {
      speed: 1200,
      spaceBetween: 20,
      slidesPerView: 3,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".meet-experts__slider-pagination",
        clickable: true,
      },
      breakpoints: {},
    };
  }

  private initSwiper() {
    const el = document.querySelector(this.selector);
    if (!el) return;

    // @ts-expect-error Swiper is global
    if (typeof Swiper !== "undefined") {
      // @ts-expect-error Swiper is global
      this.swiper = new Swiper(this.selector, this.getOptions());
    }
  }
}
