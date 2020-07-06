new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    scrollingSpeed: 600,
    navigationTooltips: ['Home', 'About', 'Projects', 'Contact'],
    onLeave: (origin, destination, direction) => {
        const title = document.querySelector('.s2');
        const tl = new TimelineMax({ delay: 0.5 });
        if (destination.index === 1) {
            tl.fromTo(title, 1, { x: '-100%' }, { x: '0' });
        }
    }
});

