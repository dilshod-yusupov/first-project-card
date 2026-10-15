export default class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.modalClose = this.modal.querySelector(".modal-close");
    this.overlay = document.querySelector(".overlay");
    this.initCloseListeners();
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    document.body.classList.add("modal-open");
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    document.body.classList.remove("modal-open");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  initCloseListeners() {
    this.modalClose.addEventListener("click", () => {
      this.close();
    });
  }
}
