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

//올해가 몇년도인지 추출하는 방법
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해가 몇년도인지 추출
