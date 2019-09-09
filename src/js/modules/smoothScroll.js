class SmoothScroll {
    constructor() {
        this.scrollElems = document.querySelectorAll('.main-menu__link');
        this.addEvents();
    }

    easeIn(t) {
        return t;
    };

    scrollToElem (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) {
        const runtime = currentTime - startTime;
        let progress = runtime / duration;
        
        progress = Math.min(progress, 1);
        
        const ease = this.easeIn(progress);
        
        window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
        if(runtime < duration){
            requestAnimationFrame((timestamp) => {
            const currentTime = timestamp || new Date().getTime();
            this.scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
            })
        }
    }

    scrolling(scrollElemId) {
        // Grab all the scroll class anchor elements, use whatever class you like
        
        // 2. find that node from the document
        const scrollEndElem = document.getElementById(scrollElemId);
            
        // 3. and well animate to that node.. 
        const anim = requestAnimationFrame((timestamp) => {
        const stamp = timestamp || new Date().getTime();
        const duration = 1200;
        const start = stamp;
        
        const startScrollOffset = window.pageYOffset;
        const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top - 90;
        
        this.scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        })
    }

    addEvents() {
    // Now add an event listeners to those element
        for(let i = 0; i < this.scrollElems.length; i++){
        const elem = this.scrollElems[i];
        
            elem.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 1. Get the element id to which you want to scroll
            const scrollElemId = e.target.href.split('#')[1];
            this.scrolling(scrollElemId);
        })
        }
    }
}

export default SmoothScroll;