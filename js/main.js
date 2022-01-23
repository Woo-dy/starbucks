// MAIN 01. 검색창 클릭 시 '통합검색' 및 크기 변경 script

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',  function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});


searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// MAIN 02. badges scroll 배너 사라지고 나타나는 효과

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// _.throttle(실행할 함수, 몇초마다 실행할지 시간을 추가)
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 500){
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // TOP 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // TOP 버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));


// TOP 버튼 맨위로 보내기
toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});



// MAIN 03. fade-in 순차적으로 나타내기

const fadeEls = document.querySelectorAll('.visual .fade-in');



fadeEls.forEach(function (fadeEl, index) {

    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7 1.4 2.1 2.8
        opacity: 1
    });
        
    console.log(fadeEl, index);
});


// MAIN 04. 공지사항 SWIPER 사용하기

// new Swper(선택자, 옵션)

new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true, // autoplay: 자동재생
    loop: true // loop: 반복재생
});


// MAIN 05. 슬라이드 SWIPER 사용하기

// new Swper(선택자, 옵션)
new Swiper('.promotion .swiper', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, // loop: 반복재생
    autoplay: {
        // delay: 시간설정
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소를 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-button-prev',
        nextEl: '.promotion .swiper-button-next'
    }
});

// MAIN 08. 다중 요소 슬라이드
new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5, // 한번에 보여줄 슬라이드 개수,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

// MAIN 05. PROMOTION TOGGLE 만들기

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
});

// MAIN 06. 유튜브 영상 둥둥 떠다니는 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector, //선택자
        random(1.5, 2.5),  //애니메이션 동작 시간
        {   // 옵션
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// MAIN 07. 스크롤 위치 계산 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


//올해가 몇년도인지 추출하는 방법
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해가 몇년도인지 추출
