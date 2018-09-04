var scrollTo = function() {
    console.log("oi oi oi");
    var el = document.querySelector('#newsletter');
    console.log(el);
    el.scrollIntoView({
        behavior: 'smooth'
    });
}