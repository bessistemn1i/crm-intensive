class TabSwitcher {
    constructor() {
        this.tabs = [...document.querySelectorAll('.benefit')];
        this.resultC = document.querySelector('.benefits__more-info-container');
        this.resultContainer = document.querySelector('.benefits__more-info-text');
        this.benefits = {
            "confidence": "Уверенность в работе - самостоятельная настройка CRM дает большое преимущество - все рычаги управления компанией и контроль продаж в ваших руках.",
            "order": "Порядок в продажах - результат успешного прохождения интенсива - рабочая CRM система, в которой Вы больше не теряете клиентов и видите точки роста.",
            "economy": "Экономия времени и денег - бесплатное внедрение своими руками по шагам под нашим чутким руководством сбережет ваши главные ресурсы."
        }
        this.resultText;
        this.addEvents();
    }

    removeActiveClass() {
        this.tabs.map((el) => el.classList.remove('benefit--active'));
    }
    checkTab(el) {
        this.removeActiveClass();
        el.classList.add('benefit--active');
        let id = el.id;
        this.resultText = this.benefits[`${id}`];
        this.resultContainer.style.opacity = 0;
        this.resultC.style.opacity = 0;
        this.resultContainer.textContent = this.resultText;
        
        setTimeout(() => {
            this.resultC.style.opacity = 1;
            this.resultContainer.style.opacity = 1;
        }, 250);
    }
    addEvents() {
        this.tabs.map((el) => {
            if(el.classList.contains('benefit--active')) {
                let id = el.id;
                this.resultText = this.benefits[`${id}`];
                this.resultContainer.textContent = this.resultText;
            }
        })
        this.tabs.map((el) => el.addEventListener('click', () => this.checkTab(el)));
    }
}

export default TabSwitcher;