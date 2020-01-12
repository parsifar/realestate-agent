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