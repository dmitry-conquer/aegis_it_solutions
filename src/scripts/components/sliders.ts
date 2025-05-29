class Sliders {
  private swiper = null;
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
      grabCursor: true,
      parallax: true,
      spaceBetween: 30,
      autoplay: { delay: 2000 },
      cardsEffect:
        effect === "cards"
          ? { perSlideOffset: window.innerWidth >= 1024 ? 11 : 7, rotate: false, slideShadows: false }
          : undefined,
      pagination: {
        el: ".cards-slider__pagination",
        clickable: true,
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

    // @ts-expect-error Swiper is global
    if (typeof Swiper !== "undefined") {
      // @ts-expect-error Swiper is global
      if (this.swiper) this.swiper.destroy(true, true);

      // @ts-expect-error Swiper is global
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

export default Sliders;
