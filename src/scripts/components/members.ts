import { openModal } from "../modal";

export default class Members {
  private selectors: Record<string, string> = {
    root: "[data-members]",
    member: "[data-member]",
    slot: "[data-modal-slot]",
    fullInfo: "[data-member-full]",
  };
  private rootElement: HTMLElement;
  private slotElement: HTMLElement;

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root) as HTMLElement;
    this.slotElement = document.querySelector(this.selectors.slot) as HTMLElement;
    if (!this.rootElement || !this.slotElement) return;
    this.bindEvents();
  }

  private openMemberModal = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const memberCard = target.closest(this.selectors.member) as HTMLElement;
    if (!memberCard) return;
    const memberInfoElement = memberCard.querySelector(this.selectors.fullInfo) as HTMLElement;
    if (!memberInfoElement) return;
    this.slotElement.innerHTML = memberInfoElement.innerHTML;
    openModal("expert-modal");
  };

  private bindEvents() {
    this.rootElement.addEventListener("click", this.openMemberModal);
  }
}
