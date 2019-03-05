$(document).ready(function() {
    var scene = $('#parallax-scene').get(0);
    var parallaxInstance = new Parallax(scene);

    $('#page1').show();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();

    $(`#title1`).on(`click`, function() {
        $(`#page1`).slideDown();
        $(`#page2`).slideUp();
        $(`#page3`).slideUp();
        $(`#page4`).slideUp();
        $(`#title1`).text(`ClueForYou`);
        $(`#title2`).text(`Wayfarer - Click to expand`);
        $(`#title3`).text(`Learnify - Click to expand`);
        $(`#title4`).text(`BettingWeb - Click to Expand`);
    })

    $(`#title2`).on(`click`, function() {
        $(`#page1`).slideUp();
        $(`#page2`).slideDown();
        $(`#page3`).slideUp();
        $(`#page4`).slideUp();
        $(`#title2`).text(`Wayfarer`);
        $(`#title1`).text(`ClueForYou - Click to expand`);
        $(`#title3`).text(`Learnify - Click to expand`);
        $(`#title4`).text(`BettingWeb - Click to expand`);
    })

    $(`#title3`).on(`click`, function() {
        $(`#page1`).slideUp();
        $(`#page2`).slideUp();
        $(`#page3`).slideDown();
        $(`#page4`).slideUp();
        $(`#title3`).text(`Learnify`);
        $(`#title1`).text(`ClueForYou - Click to expand`);
        $(`#title2`).text(`Wayfarer - Click to expand`);
        $(`#title4`).text(`BettingWeb - Click to expand`);
    })

    $(`#title4`).on(`click`, function() {
        $(`#page1`).slideUp();
        $(`#page2`).slideUp();
        $(`#page3`).slideUp();
        $(`#page4`).slideDown();
        $(`#title3`).text(`Learnify - Click to expand`);
        $(`#title1`).text(`ClueForYou - Click to expand`);
        $(`#title2`).text(`Wayfarer - Click to expand`);
        $(`#title4`).text(`BettingWeb`);
    })

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 720) {
        $(`.nav-list-item`).addClass(`yellownav`);
        } else { 
        $(`.nav-list-item`).removeClass(`yellownav`);
        }
    })

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 720) {
        $(`.name-and-hamburger`).addClass(`yellowbar`);
        } else { 
        $(`.name-and-hamburger`).removeClass(`yellowbar`);
        }
    })

    var scrolllink = $(`.scroll`);
    scrolllink.click(function(e) {
        e.preventDefault();
        $(`body, html`).animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })

    $('.cross').hide();
    $('.hamburger-ul').hide();
    $('.hamburger').on('click', function() {
        $('.hamburger-ul').slideToggle('slow', function() {
            $('.hamburger').hide();
            $('.cross').show();
        });
    });

    $('.cross').on('click', function() {
        $('.hamburger-ul').slideToggle('slow', function() {
            $('.cross').hide();
            $('.hamburger').show();
        });
    });

    $('.hamburger-about, .hamburger-skills, .hamburger-projects, .hamburger-contact').on('click', function() {
        $('.hamburger-ul').slideToggle('slow', function() {
            $('.hamburger').show();
            $('.cross').hide()
        })
    })

});

