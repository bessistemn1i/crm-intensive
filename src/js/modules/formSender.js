import CommonPopup from './commonPopup';

class FormSender {
    constructor() {
        this.form = document.querySelector('.form');
        this.elems = this.form.querySelectorAll(".popup-form__input");
        this.submit = document.querySelector('.sign-up--form-popup');
        this.popup = new CommonPopup().addEvents().popup;
        this.overlay = new CommonPopup().addEvents().overlay;
        this.addEvents();
    }

    sendFormData(evt) {
        evt.preventDefault();
        let dataToSend = {};
        this.elems.forEach((el) => {
            dataToSend[el.name] = el.value;
        });

        let xhr = new XMLHttpRequest();
        
        //url for localhost dev
        let url = `${window.location.origin}/post`;
        let jsonData = JSON.stringify(dataToSend);

        xhr.open('POST', url, true);
        xhr.responseType = 'document';
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && navigator.onLine) {
                if(xhr.status >= 200 && xhr.status < 304) {
                    let xmlDoc = xhr.response.documentElement.querySelector('.common-popup__wrapper');
                    this.callBackResponse(xmlDoc);
                }
            }
        };
        xhr.send(jsonData);
    }

    callBackResponse(answer) {
        if(this.popup !== undefined ) {
            this.popup.appendChild(answer);
            this.form.reset();
            setTimeout(() => {
                this.popup.classList.add(`${this.popup.className}--active`);
            }, 250);
            const popupClose = this.popup.querySelector('.common-popup-content__close');
            popupClose.addEventListener('click', (event) => this.closePopup(event, this.popup));
        }
        return;
    }
    
    closePopup(evt, el) {
        evt.preventDefault();
        const regEpx = /\S+--active/gm;
        const classToRemove = el.className.match(regEpx)[0];
        el.classList.remove(classToRemove);
        document.querySelector('.common-popup__wrapper').remove();
    }

    addEvents() {
        if(!this.form) return;

        this.submit.addEventListener('click', () => this.sendFormData(event));
    }
}

export default FormSender;