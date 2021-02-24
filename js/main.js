new fullpage('#fullpage', {
    anchors: ['Presentation', 'Aboutme', 'Formation', 'Technologies', 'Projects'],
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    verticalCentered: false,
    navigation: true,
    showActiveTooltip: true,
    scrollingSpeed: 1200,
    responsiveHeight: 700
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
