$( document ).ready(function() {

    // Slimscroll
    $('.slimscroll').slimscroll({
        allowPageScroll: true
    });

    // Wow
    new WOW().init();

    // Smooth scroll
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var scrollTo = $target.offset().top

        $('html, body').stop().animate({
            'scrollTop': scrollTo
        }, 1000, 'easeInOutExpo');
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            $(".navbar").addClass("whiteHeader");
        } else {
            $(".navbar").removeClass("whiteHeader");
        }
    });

    // Tabs
    [].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
        new CBPFWTabs( el );
    });



    $("#topmenu-home").click(track("Home"));
    $("#topmenu-features").click(track("Features"));
    $("#ftopmenu-preco").click(track("Preço"));
    $("#topmenu-euquero").click(track("Eu quero menu superior"));
    $("#topmenu-eu-quero-testar").click(track("Eu quero botão"));

    $("#features-o-que-e").click(track("O que é?"));
    $("#features-o-que-posso-fazer").click(track("O que posso fazer?"));
    $("#features-como-posso-fazer").click(track("Como posso fazer?"));
    $("#features-vantagens").click(track("Vantagens"));

    $("#eu-quero").click(track("Envio dados pedindo"));
});

var track = function(key) {
  mixpanel.track(key);
}
