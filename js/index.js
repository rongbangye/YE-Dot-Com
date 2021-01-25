console.log('welcome');
const cover = document.querySelector('.cover');
const cover2 = document.querySelector('.cover2');
const cover3 = document.querySelector('.cover3');
const logo = document.querySelector('.logo');
const theme = document.querySelector('#theme');
const github = document.querySelector('#github');
const linkedin = document.querySelector('#linkedin');
const email = document.querySelector('#email');
const big = document.querySelector('.big');
const bigAboutMe = document.querySelector('.big-aboutme');

const tl3 = gsap.timeline({
  delay: 0,
  defaults: {
    duration: 3,
  },
});

const tl = gsap.timeline({
  delay: 3,
  defaults: {
    duration: 1,
    ease: 'slow(0.3, 0.4, false)',
  },
});

const tl2 = gsap.timeline({
  duration: 4,
  ease: 'slow(0.1, 0.4, false)',
  y: -500,
});

tl3.from(cover2, { visibility: 'visible' });
tl3.to(cover2, { visibility: 'hidden' });
tl.to(cover, { height: 0 });
tl.from(logo, 0.1, { bottom: -10, opacity: 0 });
tl.to(logo, 0.1, { bottom: 0, opacity: 1 });
tl.from(theme, 0.1, { bottom: -10, opacity: 0 });
tl.to(theme, 0.1, { bottom: 0, opacity: 1 });
tl.from(github, 0.1, { bottom: -10, opacity: 0 });
tl.to(github, 0.1, { bottom: 0, opacity: 1 });
tl.from(linkedin, 0.1, { bottom: -10, opacity: 0 });
tl.to(linkedin, 0.1, { bottom: 0, opacity: 1 });
tl.from(email, 0.1, { bottom: -10, opacity: 0 });
tl.to(email, 0.1, { bottom: 0, opacity: 1 });
tl2.from(big, 0.1, { y: 30, opacity: 0 });
tl2.to(big, 0.1, { y: 0, opacity: 1 });
tl2.from(bigAboutMe, 0.1, { y: 10, opacity: 0 });
tl2.to(bigAboutMe, 0.1, { y: 0, opacity: 1 });
