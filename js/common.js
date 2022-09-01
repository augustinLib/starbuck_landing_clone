const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// search라는 div요소를 클릭하면, input요소에 focus하라
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// searchInputEl이 focus되면, focused라는 class를 추가하겠다.
// 이후 HTML의 input 부분에 placeholder 속성 추가하겠다.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

// searchInputEl이 focus해제(blur)되면, focused라는 class를 추가하겠다.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // placeholder 부분 빈 문자로
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector(".this-year");
// textContent : 해당 요소가 가지고 있는 글자 요소
// Date().getFullYear() : 현재 년도
thisYear.textContent = new Date().getFullYear();