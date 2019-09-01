class PopupOpener {
    constructor() {
        this.triggers = [...document.querySelectorAll('.sign')];
        this.form = document.querySelector('.popup-form');
        this.triggerToClose = document.querySelector('.popup-form__close');
        this.addEvents();
    }

    closePopup() {
        this.form.classList.add('popup-form--hidden');
    }

    switchPopup() {
        if(this.form.classList.contains('popup-form--hidden')) {
            this.form.classList.remove('popup-form--hidden');
        }
    }
    addEvents() {
        this.triggers.map((el) => el.addEventListener('click', () => this.switchPopup()))
        this.triggerToClose.addEventListener('click', () => this.closePopup());
    }
}

export default PopupOpener;