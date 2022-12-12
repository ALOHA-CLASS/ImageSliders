

$(function() {

    $('.slide-container').bxSlider({
        mode: 'horizontal',         // 페이드 효과로 슬라이드   : 'horizontal', 'vertical', 'fade'
        captions: false,             // 이미지 하단의 제목
        slideWidth: 480,            // 슬라이드 가로 크기 지정
        auto: true,                 // 자동재생
        pause: 2000,                // 슬라이드 당 재생 시간 (ms)
        autoControls: false,         // 재생버튼, 중지버튼
        stopAutoOnClick: true,      // 클릭할 때, 자동재생 멈춤
        pager: true,                // 페이지네이션
        speed: 500,                 // 슬라이드가 전환되는 시간 (ms)
        keyboardEnabled: true,      // 키보드 사용가능 여부
        controls: true,            // [<] [>] 화살표 여부

        moveSlides: 2,              // 전환될 슬라이드 개수
        minSlides: 2,               // 최소 슬라이드 개수
        maxSlides: 2,               // 최대 슬라이드 개수
    })

})