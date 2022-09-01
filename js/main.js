const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


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
    // 위로가기 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });

  } else {
    // show badge
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 위로가기 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });

  }
}, 300));
// _.throttle(함수, 시간(ms)


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

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

new Swiper(".awards .swiper-container", {
  // 자동재생 ON
  autoplay: true,
  loop: true,
  // 사이사이의 여백 30px
  spaceBetween: 30,
  // 하나의 화면에 몇개의 slide가 보일 것인지
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
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



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    // y축으로 얼마나 이동하면서 애니메이션 처리할지
    y: size,
    // repeat: -1 = 무한반복 
    repeat: -1,
    // yoyo: true = 애니메이션이 처리가 되면 거꾸로 애니메이션 동작
    yoyo: true,
    // gsap easing
    ease: Power1.easeInOut,
    // 몇 초 뒤에 애니메이션 실행할지
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부 감시할 요소 지정
      triggerHook: .8, // viewport의 시작이 0이고, 끝이 1이다. viewport의 0.8지점부분에 보여짐 여부 감시하는 triggerHook 걸려있음
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

