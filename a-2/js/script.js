$(document).ready(function () {
    // 탭메뉴 이벤트
    $(".main_menu").mouseover(function () {
        $(".sub_menu").slideDown();
    });
    $(".main_menu").mouseleave(function () {
        $(".sub_menu").slideUp();
    }); // 탭메뉴 이벤트 종료

    // 슬라이드 이벤트
    setInterval(function () {
        $(".slide_wrap > ul ").delay(2500);
        $(".slide_wrap > ul ").animate({ marginLeft: "-1200px" }, 500);
        $(".slide_wrap > ul ").delay(2500);
        $(".slide_wrap > ul ").animate({ marginLeft: "-2400px" }, 500);
        $(".slide_wrap > ul ").delay(2500);
        $(".slide_wrap > ul ").animate({ marginLeft: "0" }, 500);
    }); // 슬라이드 이벤트 종료

    // 모달 이벤트
    $(".notice > ul > li:nth-of-type(1)").click(function () {
        $(".popup").fadeIn();
    });
    $(".popup_bottom").click(function () {
        $(".popup").fadeOut();
    });
});
