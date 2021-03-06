// slide down nav
var lastScrollTop = 0;
var menuIsVisible = false;

$(window).on('scroll', function () {
    st = $(this).scrollTop();
    if (st < lastScrollTop && st > 0 && menuIsVisible == false) {
        $(".top-header").css({ position: 'fixed', top: 0, background: 'var(--grey)', display: 'none', animation: 'none', width: '100%' })
        $(".top-header").slideDown("fast")
        menuIsVisible = true;

    }
    else if (st > lastScrollTop && menuIsVisible == true) {
        $(".top-header").slideUp("fast", function () {
            $(".top-header").css({ position: 'relative', top: 0, background: 'none', display: 'flex' })
        })

        menuIsVisible = false;

    }

    else {
        if (st < lastScrollTop && st == 0) {
            $(".top-header").fadeOut("fast", function () {
                $(".top-header").css({ position: 'relative', top: 0, background: 'none', display: 'flex' })
            })

            menuIsVisible = false;
        }
    }
    lastScrollTop = st;
});

// MOBILE MENU
$("#mobile-menu-btn").on("click", function () {
    $(".mobile-menu-modal").css({ left: 0 })
})
$("#mobile-menu-close-btn").on("click", function () {
    $(".mobile-menu-modal").css({ left: "100vw" })
})
$(".mobile-nav-item").on("click", function () {
    $(".mobile-menu-modal").css({ left: "100vw" })
})


// Changing headings
let title1 = document.querySelector(".cta-div .line-one")
let title2 = document.querySelector(".cta-div .line-two")
let contentOne = ["WELCOME TO", "EXTRAORDINARY LUXURY", "MEMBER OF"]
let contentTwo = ["NORA BROWN", "HOMES", "LUXURY PRESENCE"]
let i = 1;
setInterval(function () {
    title1.innerHTML = contentOne[i]
    $(".line-two").hide()
    title2.innerHTML = contentTwo[i]
    $(".line-two").fadeIn(700)
    i++

    if (i > contentOne.length - 1) {
        i = 0
    }
}, 4000)

// Featured Section Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
})

// CONTACT MODAL
$("#nav-contact-btn").on("click", function () {
    $(".contact-modal").css({ transform: 'translateY(130vh)' })
})
$("#contact-close-btn").on("click", function () {
    $(".contact-modal").css({ transform: 'translateY(-130vh)' })
})
$("#mobile-nav-contact-btn").on('click', function () {
    $(".contact-modal").css({ transform: 'translateY(130vh)' })
})
