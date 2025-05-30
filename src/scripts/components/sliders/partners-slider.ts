export default class PartnersSlider {
  private readonly selector: string = "#partners-slider";

  constructor() {
    this.initSwiper();
  }

  private getOptions() {
    return {
      speed: 1200,
      grabCursor: true,
      spaceBetween: 30,
      slidesPerView: 3,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".partners__slider-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        630: {
          slidesPerView: 3,
        },
      },
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
