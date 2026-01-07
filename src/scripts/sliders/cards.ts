export default class CardsSlider {
  private swiper: typeof Swiper | null = null;
  private readonly selector = "#cards-slider";
  private _resizeTimer?: number;

  constructor() {
    this.initSwiper();
    window.addEventListener("resize", this.onResize.bind(this));
  }

  private getEffect() {
    return window.innerWidth <= 767.98 ? "slide" : "cards";
  }

  private getOptions() {
    const effect = this.getEffect();
    return {
      speed: 800,
      effect,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      cardsEffect:
        effect === "cards"
          ? { perSlideOffset: window.innerWidth >= 1024 ? 11 : 7, rotate: false, slideShadows: false }
          : undefined,
      pagination: {
        el: ".cards-slider__pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".cards-slider__button_next",
        prevEl: ".cards-slider__button_prev",
      },
      breakpoints: {
        320: {
          spaceBetween: 30,
          autoHeight: true,
        },
        767.98: {
          autoHeight: false,
        },
      },
    };
  }

  private initSwiper() {
    const el = document.querySelector(this.selector);
    if (!el) return;

    if (typeof Swiper !== "undefined") {
      if (this.swiper) this.swiper.destroy(true, true);

      this.swiper = new Swiper(this.selector, this.getOptions());
    }
  }
  private onResize() {
    if (this._resizeTimer) {
      clearTimeout(this._resizeTimer);
    }
    this._resizeTimer = window.setTimeout(() => {
      this.initSwiper();
    }, 200);
  }
}
