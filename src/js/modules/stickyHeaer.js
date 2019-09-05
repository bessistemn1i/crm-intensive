class StickyHeader {
    constructor() {
        this.nav = document.querySelector(".main-header__nav");
        this.navTop = this.nav.offsetTop;
        this.addEvents()
    }

    toSticky() {
        if(window.pageYOffset >= this.navTop) {
            this.nav.classList.add('main-header__nav--sticky');
        }
        else {
            this.nav.classList.remove('main-header__nav--sticky');
        }
    }

    addEvents() {
        window.addEventListener('scroll', () => this.toSticky())
    }
}

export default StickyHeader;