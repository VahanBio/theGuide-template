function animations() {
    const sr = ScrollReveal({
        distance: '80px',
        duration: 2500,
        reset: false,
    })

    sr.reveal('.right', {
        origin: 'right',
        interval: 100,
    })
    sr.reveal('.left', {
        origin: 'left',
        interval: 100,
    })
    sr.reveal('.top', {
        origin: 'top',
        interval: 100,
    })
    sr.reveal('.bottom', {
        original: 'bottom',
        interval: 100,
    })
}
animations()