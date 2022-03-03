const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
$(function () {
  $('.slider').slick({
    autoplay: true, //自動スクロール
    autoplaySpeed: 0, //自動再生時のスライド切り替えの時間
    speed: 5000, //スライドが流れるスピード
    arrows: false, //左右の矢印を非表示
    swipe: false, //スワイプ禁止
    slidesToShow: 4, //表示するスライドの数
    cssEase: 'linear', //画像切り替えのアニメーション"linearは等速"
    pauseOnFocus: false, //フォーカスしても止めない
    pauseOnHover: false, //マウスホバーしても止めない
  });
});