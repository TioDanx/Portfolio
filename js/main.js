new fullpage('#fullpage', {
    anchors: ['Presentation', 'Aboutme', 'Formation', 'Technologies', 'Projects'],
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    verticalCentered: false,
    navigation: true,
    showActiveTooltip: true,
    scrollingSpeed: 800,
    responsiveWidth: 900,
    scrollOverflow: true
});

ScrollReveal().reveal('.welcome', {
    duration: 1000,
    origin: 'left',
    distance: '400px',
    reset: true
})
ScrollReveal().reveal('.arrow', {
    duration: 1000,
    origin: 'top',
    delay: 2000,
    distance: '400px',
    reset: true
})
ScrollReveal().reveal('.fd', {
    duration: 1000,
    origin: 'right',
    distance: '400px',
    delay: '500',
    reset: true
})
ScrollReveal().reveal('.cv', {
    duration: 1000,
    origin: 'right',
    distance: '200px',
    delay: '1000',
    reset: true
})
ScrollReveal().reveal('.github', {
    duration: 1000,
    origin: 'right',
    distance: '200px',
    delay: '1250',
    reset: true
})
ScrollReveal().reveal('.linkedin', {
    duration: 1000,
    origin: 'right',
    distance: '200px',
    delay: '1500',
    reset: true
})
ScrollReveal().reveal('.photo', {
    duration: 1000,
    origin: 'left',
    distance: '100px',
    reset: true,
    desktop: false
})
ScrollReveal().reveal('.about-me', {
    duration: 1000,
    origin: 'top',
    distance: '200px',
    reset: true,
    desktop: false
})
ScrollReveal().reveal('.my-description', {
    duration: 1000,
    origin: 'bottom',
    distance: '200px',
    reset: true,
    desktop: false
})
ScrollReveal().reveal('.formation-title', {
    duration: 1000,
    origin: 'top',
    distance: '200px',
    reset: true,
    desktop: false
})
ScrollReveal().reveal('.education-card', {
    duration: 1000,
    origin: 'left',
    distance: '200px',
    reset: true,
    desktop: false
})
ScrollReveal().reveal('.technologies-title', {
    duration: 1000,
    origin: 'top',
    distance: '400px',
    reset: true,
    desktop: false
})
ScrollReveal().reveal('.technologies-explanation', {
    duration: 1000,
    origin: 'left',
    distance: '300px',
    reset: true,
    desktop: false
})
ScrollReveal().reveal('.svgs-container', {
    duration: 1000,
    origin: 'bottom',
    distance: '200px',
    reset: true,
    desktop: false
})
ScrollReveal().reveal('.projects-title', {
    duration: 1000,
    origin: 'top',
    distance: '400px',
    reset: true,
    desktop: false
})
ScrollReveal().reveal('.project-card', {
    duration: 1000,
    origin: 'left',
    distance: '300px',
    reset: true,
    desktop: false
})