class CommonPopup {
    constructor() {
        this.addEvents();
    }

    addEvents() {
        const commonPopup = document.createElement('div');
        const overlay = document.createElement('div');
        commonPopup.classList.add('common-popup');
        overlay.classList.add('common-popup-overlay');
        
        return {
            popup: commonPopup,
            overlay: overlay
        }
    }
}

export default CommonPopup;