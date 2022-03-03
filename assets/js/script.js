$(function(){
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

<<<<<<< HEAD
  // ここから初めのアニメーション
  setTimeout(function () {
    $('.start p').fadeIn(1600);
  }, 500);
  setTimeout(function () {
    $('.start').fadeOut(500);
  }, 2500);
  // ここまで
  
  //ハンバーガー
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });
  //ハンバーガー終わり
  
  
  
})
=======
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
>>>>>>> 7c2c6f0edff6424dcde568fed24ba34b280c9a1a
