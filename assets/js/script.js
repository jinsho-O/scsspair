$(function(){
  $(document).on('ready', function() {
    $(".vertical-center-3").slick({
      autoplay: true,//自動的に動き出すか。初期値はfalse。
      infinite: true,//スライドをループさせるかどうか。初期値はtrue。dots: true,
      vertical: true,
      verticalSwiping: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      prevArrow: '<div class="slick2-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick2-next"></div>',//矢印部分NextのHTMLを変更
    });
  });
  $('.slider2').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 4,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick2-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick2-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
  });

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

