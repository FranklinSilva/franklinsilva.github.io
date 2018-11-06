$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        }
    }
});


function desgraca() {
    var el = document.querySelector('#sympla');
    console.log(el);
    el.scrollIntoView({
        behavior: 'smooth'
    });
}