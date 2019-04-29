(function($){
    $.fn.scrollingTo = function( opts ) {
        var defaults = {
            animationTime : 1000,
            easing : '',
            callbackBeforeTransition : function(){},
            callbackAfterTransition : function(){}
        };

        var config = $.extend( {}, defaults, opts );

        $(this).click(function(e){
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find( $(this).data('section') );
            if ( $section.length < 1 ) {
                return false;
            };

            if ( $('html, body').is(':animated') ) {
                $('html, body').stop( true, true );
            };

            var scrollPos = $section.offset().top;

            if ( $(window).scrollTop() == scrollPos ) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
                'scrollTop' : (scrollPos+'px' )
            }, config.animationTime, config.easing, function(){
                config.callbackAfterTransition(eventVal, $section);
            });
        });
    };

    /* ========================================================================= */
    /*   Contact Form Validating
    /* ========================================================================= */

    $('#contact-form').validate({
        rules: {
            name: {
                required: true, minlength: 4
            }
            , email: {
                required: true, email: true
            }
            , message: {
                required: true,
            }
            ,
        }
        , messages: {
            user_name: {
                required: "Come on, you have a name don't you?", minlength: "Your name must consist of at least 2 characters"
            }
            , email: {
                required: "Please put your email address",
            }
            , message: {
                required: "Put some messages here?", minlength: "Your name must consist of at least 2 characters"
            }
            ,
        }
        , submitHandler: function(form) {
            $(form).ajaxSubmit( {
                type:"POST", 
                data: $(form).serialize(), 
                url:"sendmail.php", 
                beforeSubmit: function() {
                    $(".preload").fadeIn();
                },
                success: function(res) {
                    $(".preload").fadeOut();
                    $('#contact-form #success').html(res);
                    $('#contact-form #success').fadeIn();
                },
                error: function() {
                    $(".preload").fadeOut();
                    $('#contact-form #error').html(res);
                    $('#contact-form #error').fadeIn();
                }
            }
            );
        }
    });


}(jQuery));



jQuery(document).ready(function(){
	"use strict";
	new WOW().init();

    (function(){
    jQuery('.smooth-scroll').scrollingTo();
    }());

});


$(document).ready(function(){

    //open and close tab menu
    $('.nav-tabs-dropdown').on("click", "li:not('.active') a", function(event) { 
        $(this).closest('ul').removeClass("open");
    }).on("click", "li.active a", function(event) { 
        $(this).closest('ul').toggleClass("open");
    });

    if($('.mcarousel').length){
        $('.mcarousel').owlCarousel({
            loop: true,
            margin: 10,
            slideSpeed: 800,
            paginationSpeed: 5000,
            navigation: true,
            pagination: false,
            items: 1,
            navigationText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
            autoPlay: true,
            stopOnHover: true
        })
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $(".navbar-brand a").css("color","#fff");
            $("#top-bar").removeClass("animated-header");
            $('#return-to-top').fadeIn(200);
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#top-bar").addClass("animated-header");
            $('#return-to-top').fadeOut(200);
        }

    });

    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });   

});







 




