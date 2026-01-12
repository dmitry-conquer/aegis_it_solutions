import { openModal } from "../utils";

export class Offer {
  private selectors: Record<string, string> = {
    root: "[data-offers]",
    button: "[data-offers-button]",
    list: "[data-offers-list]",
    modalId: "offer-modal",
    modalSlot: "[data-modal-slot]",
  };

  private rootElement: HTMLElement | null = null;
  private listElement: HTMLElement | null = null;
  private modalElement: HTMLElement | null = null;
  private modalSlotElement: HTMLElement | null = null;
  private scroll: any;

  constructor(scroll: any) {
    this.scroll = scroll;
    this.rootElement = document.querySelector(this.selectors.root) as HTMLElement;
    this.modalElement = document.getElementById(this.selectors.modalId) as HTMLElement;
    this.listElement = this.rootElement?.querySelector(this.selectors.list) as HTMLElement;
    this.modalSlotElement = this.modalElement?.querySelector(this.selectors.modalSlot) as HTMLElement;

    if (!this.rootElement || !this.modalElement || !this.modalSlotElement) {
      return;
    }

    this.init();
  }

  private init() {
    this.rootElement?.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest(this.selectors.button) as HTMLElement;
      if (!button) return;
      const idAttr = button.dataset.offersButton;
      const idx = Number(idAttr);
      if (!Number.isFinite(idx)) return;
      this.onButtonClick(idx);
    });
  }

  private onButtonClick(id: number) {
    const items = this.listElement?.children;
    if (!items || id < 0 || id >= items.length) return;
    this.modalSlotElement!.innerHTML = "";
    const targetSlot = items[id] as HTMLElement;
    if (!targetSlot) return;
    this.modalSlotElement!.innerHTML = targetSlot.innerHTML;


    openModal(this.selectors.modalId, this.scroll);
  }
}
