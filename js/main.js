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
})

const badgeEl = document.querySelector('header .badges');

// window : brower 창
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // hide badge
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

  } else {
    // show badge
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    
  }
}, 300));
// _.throttle(함수, 시간(ms)