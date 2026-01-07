import Typed from "typed.js";

export class UseTyped {
  private element: HTMLElement;
  private string: string;

  constructor(element: HTMLElement) {
    this.element = element;
    this.string = this.normalize(element.getAttribute("data-typed-string") || "");

    if (!this.element || !this.string) {
      return;
    }

    this.init();
  }

  private init() {
    new Typed(this.element, {
      strings: [this.string],
      typeSpeed: 50,
    });
  }

  private normalize(value: string): string {
    return value.replace(/&/g, "&amp;");
  }
}
