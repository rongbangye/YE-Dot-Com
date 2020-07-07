new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    scrollingSpeed: 600,
    navigationTooltips: ['Home', 'About', 'Projects', 'Contact'],
    afterLoad: (origin, destination, direction) => {
        let showAbout = document.querySelector('#section2');
        if (origin.index === 0 && direction == 'down') {
            showAbout.classList.add('show');
            showAbout.classList.remove('hide');
        }
        else if(origin.index == 2 && direction == 'up') {
            showAbout.classList.add('show');
            showAbout.classList.remove('hide');
        }
        else {
            showAbout.classList.add('hide');
            showAbout.classList.remove('show');
        }
    }
});

