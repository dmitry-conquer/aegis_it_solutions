import MicroModal from "micromodal";

export function initModal(options: ModalOptions = {}) {
  MicroModal.init({
    disableScroll: options.disableScroll ?? true,
    disableFocus: options.disableFocus ?? true,
    onShow: options.onShow,
    onClose: options.onClose,
  });
}

export function openModal(modalId: string) {
  MicroModal.show(modalId, {
    disableScroll: true,
    disableFocus: true,
  });
}

const preventLinkClick = () => {
  const links = document.querySelectorAll("a[data-micromodal-trigger]");
  if (!links.length) return;
  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });
};

preventLinkClick();
