class ImageSwitcher {
    constructor() {
        this.imageContainer = document.querySelector('.workflow__mobile-img');
        this.imageC = document.querySelector('.workflow__mobile-image');
        this.triggers = [...document.querySelectorAll('.workflow__trigger')];
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

    switchImage(el) {
        this.imageC.style.opacity = 0;
        this.imageContainer.style.opacity = 0;
        let attr = el.dataset.img;
        this.triggers.map((el) => el.classList.remove('workflow__trigger--active'));
        el.classList.add('workflow__trigger--active');
        this.imageContainer.src = this.imageAddresses[`${attr}`];
        this.imageContainer.alt = attr;

        setTimeout(() => {
            this.imageC.style.opacity = 1;
            this.imageContainer.style.opacity = 1;
        }, 250);
    }

    addEvents() {
        this.triggers.map((el) => el.addEventListener('click', () => this.switchImage(el)));
    }
}

export default ImageSwitcher;