import { openModal } from "../modal";

export default class MeetExperts {
  private selectors: Record<string, string> = {
    root: "[data-members]",
    innerText: "[data-modal-inner]",
  };
  private rootElement: HTMLElement;

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root) as HTMLElement;
    if (!this.rootElement) return;
    this.bindEvents();
  }

  private bindEvents() {
    this.rootElement.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const memberCard = target.closest("[data-member-id]");
      if (!memberCard) return;
      openModal("expert-modal");
    });
  }
}
