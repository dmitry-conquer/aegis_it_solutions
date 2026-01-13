import { openModal } from "../utils/modal";

export default class Members {
  private selectors: Record<string, string> = {
    root: "[data-members]",
    member: "[data-member]",
    slot: "[data-modal-slot]",
    fullInfo: "[data-member-full]",
    modalId: "expert-modal",
  };
  private rootElement: HTMLElement;
  private slotElement: HTMLElement;
  private scroll: any;
  private modalElement: HTMLElement;

  constructor(scroll: any) {
    this.scroll = scroll;
    this.rootElement = document.querySelector(this.selectors.root) as HTMLElement;
    this.modalElement = document.getElementById(this.selectors.modalId) as HTMLElement;
    this.slotElement = this.modalElement?.querySelector(this.selectors.slot) as HTMLElement;
    if (!this.rootElement || !this.modalElement || !this.slotElement) return;
    this.bindEvents();
  }

  private openMemberModal = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const memberCard = target.closest(this.selectors.member) as HTMLElement;
    if (!memberCard) return;
    const memberInfoElement = memberCard.querySelector(this.selectors.fullInfo) as HTMLElement;
    if (!memberInfoElement) return;
    this.slotElement.innerHTML = memberInfoElement.innerHTML;
    openModal(this.selectors.modalId, this.scroll);
  };

  private bindEvents() {
    this.rootElement.addEventListener("click", this.openMemberModal);
  }
}
