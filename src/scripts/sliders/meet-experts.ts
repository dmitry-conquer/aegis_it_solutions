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
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1.4,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    };
  }

  private initSwiper() {
    const el = document.querySelector(this.selector);
    if (!el) return;

    if (typeof Swiper !== "undefined") {
      new Swiper(this.selector, this.getOptions());
    }
  }
}
