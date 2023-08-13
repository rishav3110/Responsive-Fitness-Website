// Navbar Scrolling JQuery LIbrary, 
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 2) {
            $('.navbar').addClass("scroll");
        }
        else {
            $('.navbar').removeClass("scroll");
        }
    })

})
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 2) {
            $('.navlist li a').addClass("color");
        }
        else {
            $('.navlist li a').removeClass("color");
        }
    })

})
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 2) {
            $('.btn').addClass("color2");
        }
        else {
            $('.btn').removeClass("color2");
        }
    })

})

