$(document).ready(function () {
    // header sub_menu
    $(".mainMenu").mouseover((_) => $(".subMenu").slideDown());
    $(".mainMenu").mouseleave((_) => $(".subMenu").slideUp());

    //slide
    setInterval(() => {
        $(".slide1").delay("2500");
        $(".slide1").animate({ marginTop: "-150px" }, "500");
        $(".slide2").delay("2500");
        $(".slide2").animate({ marginTop: "-300px" }, "500");
        $(".slide3").delay("2500");
        $(".slide3").animate({ marginTop: "0" }, "500");
    });
});
