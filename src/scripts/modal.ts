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
