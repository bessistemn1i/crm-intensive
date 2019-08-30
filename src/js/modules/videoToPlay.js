class VideoToPlay {
    constructor() {
        this.addEvents();
    }

    findVideos() {
        let videos = document.querySelectorAll('.video-container__promo');

        for(let i = 0; i < videos.length; i++) {
            this.setupVideo(videos[i]);
        }
    }

    setupVideo(video) {
        let link = video.querySelector('.main-header__video-link');
        let media = video.querySelector('.main-header__video-media');
        let button = video.querySelector('.main-header__video-button');
        let id = this.parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = this.createIframe(id);
            
            link.remove();
            button.remove();
            video.appendChild(iframe);
        });
        link.removeAttribute('href');
        video.classList.add('video-container__promo--enabled')
    }

    parseMediaURL(media) {
        let regexp = /\WON4qYmW4MQ\b/;
        let url = media.src;
        let match = url.match(regexp);
        return match[0];
    }

    createIframe(id) {
        let iframe = document.createElement('iframe');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', this.generateURL(id));
        iframe.classList.add('main-header__video-media');
        return iframe;
    }

    generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';
        return 'https://www.youtube.com/embed/' + id + query;
    }

    addEvents() {
        this.findVideos();
    }
}

export default VideoToPlay;