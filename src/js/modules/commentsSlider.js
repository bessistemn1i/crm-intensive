import {tns} from '../../../node_modules/tiny-slider/src/tiny-slider';

class CommentsSlider {
    constructor() {
        this.slider = document.querySelector('.slider-comments');
        this.addEvents();
    }

    addEvents() {
        const commentSlider = new tns({
            loop:true,
            container: this.slider,
            items: 3,
            autoplay: false,
            controls: true,
            controlsContainer: '.comments__nav',
            navContainer: '.comments__dots',
            gutter: 20
        })
    }
}

export default CommentsSlider;