$(function() {


    let owl = $('.owl-carousel')


    // owl carousel 시작!
    owl.owlCarousel({
        loop:true,                  // 반복
        margin:10,                  // 슬라이드 간 간격
        nav:true,                   // 네비게이션 화살표
        center: false,               // 센터모드
        autoplay: true,             // 자동재생
        autoplayTimeout: 5000,      // 자동재생 시간
        autoplayHoverPause: true,   // 호버 시, 자동재생 멈춤
        // items: 1,                // 슬라이드 개수

        // 반응형
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    // 스크롤 활성화
    owl.on('mousewheel', '.owl-stage', function (e) {


        // * 스크롤 크기+방향을 나타내는 속성
        // e.deltaY --(크롬,IE)--> e.originalEvent.wheelDelta
        // e.deltaY --(Firefox)--> e.originalEvent.detail
        if (e.originalEvent.wheelDelta > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        // 이벤트 기본 기능을 비활성화
        e.preventDefault();
    });



})