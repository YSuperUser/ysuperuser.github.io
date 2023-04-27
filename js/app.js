(function ($, document, window) {
    $(document).ready(function () {
        // Cloning main navigation for mobile menu
        $(".mobile-navigation").append($(".main-navigation .menu").clone());

        // Mobile menu toggle
        $(".menu-toggle").click(function () {
            $(".mobile-navigation").slideToggle();
        });

        // hero-slider
        $(".hero-slider").flexslider({
            controlNav: false,
            directionNav: true,
            animation: "fade",
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
        });

        // testimonial-carousel
        let activeTestimonial = 0;
        const testimonials = $(".testimonial-item");
        testimonials.eq(activeTestimonial).addClass("active");

        function changeTestimonial(newIndex) {
            testimonials.eq(activeTestimonial).removeClass("active");
            activeTestimonial = newIndex;
            testimonials.eq(activeTestimonial).addClass("active");
        }

        $(".next-arrow").click(function () {
            const nextTestimonial = (activeTestimonial + 1) % testimonials.length;
            changeTestimonial(nextTestimonial);
        });

        $(".prev-arrow").click(function () {
            const prevTestimonial = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
            changeTestimonial(prevTestimonial);
        });

        if ($(".map").length) {
            $(".map").gmap3({
                map: {
                    options: {
                        maxZoom: 14
                    }
                },
                marker: {
                    address: "Toronto, ON, CA",
                }
            },
                "autofit");
        }
    });

    $(window).load(function () {
        var $container = $(".filterable-items");

        $container.isotope({
            filter: "*",
            layoutMode: "fitRows",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        });

        $(".filterable-nav a").click(function (e) {
            e.preventDefault();
            $(".filterable-nav .current").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr("data-filter");
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            });
            return false;
        });
        $(".mobile-filter").change(function () {

            var selector = $(this).val();
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            });
            return false;
        });
    });

})(jQuery, document, window);
