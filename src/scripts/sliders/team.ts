export default class TeamSlider {
  private thumbSlider: any;

  constructor() {
    this.initSwiper();
  }

  private initSwiper() {
    if (typeof Swiper === "undefined") return;
    this.thumbSlider = new Swiper("#team-thumbs-slider", {
      speed: 1200,
      spaceBetween: 10,
      slidesPerView: 8,
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 8,
        },
      },
    });

    new Swiper("#team-main-slider", {
      speed: 1200,
      spaceBetween: 160,
      slidesPerView: 1,
      watchSlidesProgress: true,
      thumbs: {
        swiper: this.thumbSlider,
      },
      autoplay: {
        delay: 2000,
      },
    });
  }
}
