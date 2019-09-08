class ImageSwitcher {
    constructor() {
        this.imageContainer = document.querySelector('.workflow__mobile-img');
        this.imageC = document.querySelector('.workflow__mobile-image');
        this.triggers = [...document.querySelectorAll('.workflow__trigger')];
        this.closerPopup = this.imageC.querySelector('.workflow__mobile-close');
        this.imageAddresses = {
            'Авторам-курсов': './img/workflow/authors.jpg',
            'Тематические-видеоуроки': './img/workflow/lessons.jpg',
            'Результат': './img/workflow/result.jpg',
            'Техподдержка': './img/workflow/tech.jpg',
            'Практические-задания': './img/workflow/watsup.jpg',
            'Чат': './img/workflow/blank.jpg'
        }
        this.addEvents();
    }

    debounceOnResize(func) {
        let timer;
        return function (event) {
            if(timer) clearTimeout(timer);
            timer = setTimeout(func, 250, event);
        };
    };

    closingPopup() {
        if(this.closerPopup) {
            this.imageC.classList.remove('workflow__mobile-image--active');
            this.imageC.classList.add('visually-hidden');
            if(window.innerWidth < 1000) {
                this.imageC.style.top = 0;
            }
        }
    }

    checkActiveClass() {
        if(window.innerWidth >= 1000) {
            this.imageC.classList.remove('visually-hidden');
            this.imageC.classList.add('workflow__mobile-image--active');
            this.imageC.style.top = '';
            return this.mainHeaderHeight;
        }
        else {
            this.imageC.classList.remove('workflow__mobile-image--active');
            this.imageC.classList.add('visually-hidden');
        }

        return;
    }

    switchImage(el) {
        this.imageC.style.opacity = 0;
        this.imageContainer.style.opacity = 0;
        let attr = el.dataset.img;
        this.triggers.map((el) => el.classList.remove('workflow__trigger--active'));
        el.classList.add('workflow__trigger--active');
        this.imageContainer.src = this.imageAddresses[`${attr}`];
        this.imageContainer.alt = attr;

        setTimeout(() => {
            this.imageC.classList.remove('visually-hidden');
            this.imageC.classList.add('workflow__mobile-image--active');
            this.imageC.style.opacity = 1;
            this.imageContainer.style.opacity = 1;
        }, 250);

        if(window.innerWidth <= 1000) {
            const elHeight = el.offsetTop;
            this.imageC.style.top = `${elHeight}px`;
        }
    }

    addEvents() {
        this.checkActiveClass();
        this.triggers.map((el) => el.addEventListener('click', () => this.switchImage(el)));
        this.closerPopup.addEventListener('click', () => this.debounceOnResize(this.closingPopup()));
        
        window.addEventListener('resize', () => this.debounceOnResize(this.checkActiveClass()));
    }
}

export default ImageSwitcher;