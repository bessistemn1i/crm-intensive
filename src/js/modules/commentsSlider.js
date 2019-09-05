import {tns} from '../../../node_modules/tiny-slider/src/tiny-slider';

class CommentsSlider {
    constructor() {
        this.slider = document.querySelector('.slider-comments');
        this.addEvents();
    }

    addEvents() {
        const commentSlider = new tns({
            container: this.slider,
            items: 1,
            autoplay: false,
            controls: true,
            navPosition: 'bottom',
            controlsContainer: '.comments__nav',
            //navContainer: '.comments__dots',
            gutter: 20,
            speed: 400,
            responsive: {
                1000: {
                    items: 3,
                    slideBy: "page"
                  }
            }
        })
    }
}

export default CommentsSlider;