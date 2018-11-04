$("button[data-eid='hosting.myh.cpanel.account.header.cpanel_admin.click']")

.logo img {
    top: 150%;
    position: absolute;
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
    ms-transform: translate(0);
    max-height: 110px;
}

.navbar-fixed-top .logo img {
    top: 50%;
    position: absolute;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    ms-transform: translate(0, -50%);
    max-height: 54px;
}

.master_header_sticky {
    top: 0px;
    -webkit-transform: translateY(0)!important;
    transform: translateY(0)!important;
}


// auto slide
jQuery(function ($) {
    function TestimonialInterval() {
        $(".testimonial-slider-container .slick-next").trigger("click");
    }
    setInterval(TestimonialInterval, 3000);
});
