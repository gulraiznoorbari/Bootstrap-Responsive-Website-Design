$(document).ready(function () {
    /* Navbar Shrink */
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /* Video Popup */
    const videoSrc = $("#player1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player1").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if ($("#player1").attr("src") == "") {
                $("#player1").attr("src", videoSrc);
            }
        }
    });
});
