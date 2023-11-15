$(document).ready(function () {
    // header sub_menu
    $("#mainMenu").mouseover(function () {
        $(this).children("#subMenu").slideDown();
    });
    $("#mainMenu").mouseleave(function () {
        $(this).children("#subMenu").slideUp();
    });

    // img slide
    setInterval(function () {
        $("#slideBox > ul").delay("2500");
        $("#slideBox > ul").animate({ marginTop: "-300px" }, "500");
        $("#slideBox > ul").delay("2500");
        $("#slideBox > ul").animate({ marginTop: "-600px" }, "500");
        $("#slideBox > ul").delay("2500");
        $("#slideBox > ul").animate({ marginTop: "0px" }, "500");
    });

    $("#tabMenu > li").click(function () {
        var tab_id = $(this).attr("id");

        $("#tabMenu > li").removeClass("active");
        $(`.contents`).removeClass("active");

        $(this).addClass("active");
        $(`.${tab_id}_con`).addClass("active");

        console.log($(`.${tab_id}_con`).hasClass("active"));
    });
    // notice popup
    $(".notice_con > ul li").click(function () {
        $(".popup").fadeIn();
    });
    $(".popup_bottom > input").click(function () {
        $(".popup").fadeOut();
    });
});
