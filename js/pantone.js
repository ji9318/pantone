$(function () {
  //네비게이션
  $("nav > ul > li").hover(
    function () {
      $(this).children("ul,div").stop(true).slideDown();
      $(this).children("a").addClass("nav-active");
    },
    function () {
      $(this).children("ul,div").slideUp();
      $(this).children("a").removeClass("nav-active");
    }
  );
  $(".cate-btn").click(function () {
    $(".cate-menu").toggleClass("show");
    $(".cate-bar span").toggleClass("close");
    $(".cate-bar span").toggleClass("white");
  });

  // swiper

  var tabsName = [
    "패션 컬러 트렌드 리포트",
    "팬톤뷰 홈 + 인테리어 2023",
    "팬톤뷰 컬러 플래너",
    "팬톤 뷰포인트 컬러 이슈 11",
  ];
  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      paginationType: "custom",
      renderBullet: function (index, className) {
        if (index === tabsName.length - 1) {
          return (
            '<span class="' +
            className +
            '">' +
            tabsName[index] +
            "</span>" +
            '<div class="active-mark"></div>'
          );
        }
        return '<span class="' + className + '">' + tabsName[index] + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //isotope
  var prod = $(".prod-filter").isotope({
    itemSelector: ".item",
  });
  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("on");
    $(this).addClass("on");
    var selector = $(this).attr("data-filter");
    prod.isotope({
      filter: selector,
    });
  });

  $(".filter-btn").eq(0).addClass("prod-active");
  $(".filter-btn").click(function () {
    $(".filter-btn").removeClass("prod-active");
    $(this).addClass("prod-active");
  });

  //더보기
  $(".more").on("click", function (e) {
    e.preventDefault();
    $(".prod-wrap").toggleClass("show-more");
    $(".more i").toggleClass("fa-angle-down fa-angle-up");
  });

  //color of year
  $(".color ul li a").click(function (e) {
    e.preventDefault();
    var key = $(this).data("key");
    $(".color-wrap div").each(function (index, box) {
      $(box)
        .find("img")
        .css("opacity", "0.7")
        .stop()
        .attr("src", "img/" + key + (index + 1) + ".jpg")
        .animate({ opacity: 1 }, 400);
      // $(box).find('img').attr('src','img/'+colors[key][index]);
    });
    $(".color ul li").removeClass("active");
    $(this).parent().addClass("active");
  });

  //scroll top
  $("aside a").css("opacity", "0");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 180) {
      $("aside a").css("opacity", "1");
    } else {
      $("aside a").css("opacity", "0");
    }
    $("aside a").click(function (e) {
      e.preventDefault();
      $("html").stop().animate({ scrollTop: 0 }, 1000);
    });
  });
});
