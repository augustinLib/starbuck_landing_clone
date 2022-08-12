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

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    // fadeEl에 애니메이션이 몇 초 뒤에 실행될 것인지
    delay: (index + 1) * .7,
    // index와 함께 해서 첫 번째 요소 = 0.7초 뒤에 실행, 두 번째 요소 = 1.4초 뒤에 실행...
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true

});

new Swiper('.promotion .swiper-container', {
  direction: 'horizontal', //default
  // 한번에 3개 슬라이드 보이기
  slidesPerView: 3,
  spaceBetween: 10, // 슬라이드 사이 10px 여백
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000 //ms단위
  },
  pagination : {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 클릭이 가능한지의 여부
  },
  navigation : {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});