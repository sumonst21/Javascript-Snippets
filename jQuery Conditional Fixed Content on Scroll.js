if (location.pathname === "/") {
    $('#task_flyout').removeClass('fixed');
} else {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 135) {
            $('#task_flyout').addClass('fixed');
        } else {
            $('#task_flyout').removeClass('fixed');
        }
    });
}
