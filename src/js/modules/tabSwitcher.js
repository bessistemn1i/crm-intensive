class TabSwitcher {
    constructor() {
        this.tabs = [...document.querySelectorAll('.benefit')];
        this.resultC = document.querySelector('.benefits__more-info-container');
        this.resultContainer = document.querySelector('.benefits__more-info-text');
        this.benefits = {
            "confidence": "Самостоятельная настройка CRM дает большое преимущество - все рычаги управления компанией и контроль продаж в ваших руках.",
            "order": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores numquam nihil molestias.",
            "economy": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum ab assumenda expedita dolorem quam voluptas vel facilis iste officiis totam rem quas aut consequatur vitae ipsum velit, voluptatum magni repellendus vero!"
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
        if(el.classList.contains('benefit--active')) {
            this.tabs.insertBefore(el,)
        }
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