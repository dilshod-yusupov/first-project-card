export default class Modal {
    constructor(ModalId) {
        this.modal = document.getElementById(ModalId)
        this.modalClose = document.querySelector('.modal-close');
        this.overlay = document.querySelector('.overlay');
        this.initCloseListeners();
    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
    }

    close() {
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('overlay-showed');  
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed')
    }

    initCloseListeners() {
        this.modalClose.addEventListener('click', () =>{
            this.close();
        });
    }
}