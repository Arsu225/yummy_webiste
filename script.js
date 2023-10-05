var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".myEvents", {
    slidesPerView: 3,
    spaceBetween: 2,
    freeMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $(function () {
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
          if (!$(this).next().hasClass('show')) {
              $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
          }
          var $subMenu = $(this).next(".dropdown-menu");
          $subMenu.toggleClass('show'); // appliqué au ul
          $(this).parent().toggleClass('show'); // appliqué au li parent

          $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
              $('.dropdown-submenu .show').removeClass('show'); // appliqué au ul
              $('.dropdown-submenu.show').removeClass('show'); // appliqué au li parent
          });
          return false;
      });
  });
