//hero slider
let heroSlider;
function homeBannersSliderFunc() {
  if (heroSlider) heroSlider.destroy();
  heroSlider = new Swiper(".hero--slider", {
    parallax: true,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: "fade",
    navigation: {
      nextEl: ".hero--content .swiper-button-next",
      prevEl: ".hero--content .swiper-button-prev",
    },
    pagination: {
      el: ".hero--slider .swiper-pagination",
      clickable: true,
    },
  });
}

// news swiper 
let newsSlider;
function homeNewsSliderFunc() {
  if (newsSlider) newsSlider.destroy();
  newsSlider = new Swiper(".news-swiper", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".news-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".news--swiper-contanier .swiper-button-next",
      prevEl: ".news--swiper-contanier .swiper-button-prev",
    },
    breakpoints: {
      // 640: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}
/// training swiper
let trainingSlider;
function trainingSliderFunc() {
  if (trainingSlider) trainingSlider.destroy();
  trainingSlider = new Swiper(".training-swiper", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".training--swiper-contanier .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".training--swiper-contanier .swiper-button-next",
      prevEl: ".training--swiper-contanier .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
  },
  });

}



let StatisticsSlider;
function homeStatisticsSliderInit() {
    if (StatisticsSlider) {
        StatisticsSlider.destroy();
    }
    StatisticsSlider = new Swiper(".home-statistics--slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        //loop: true,
        speed: 2500,
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 'auto',
                spaceBetween: 50,
            },
        },
        navigation: {
            nextEl: ".home-statistics--slider-container .slider-button--next",
            prevEl: ".home-statistics--slider-container .slider-button--prev",
        },
        pagination: {
            el: ".home-statistics--slider-pagination",
            clickable: true,
        },
    });

}


let sectorsSlider;
function sectorsSliderFunc() {
  if (sectorsSlider) sectorsSlider.destroy();
  sectorsSlider = new Swiper(".sectors__swiper", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".sectors__swiper-container .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".sectors__swiper-container .swiper-button-next",
      prevEl: ".sectors__swiper-container .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
  },
  });

}


/// animation 
$(document).ready(function() {
  new WOW().init();
  ///// responsive header
  $(document).on("click", ".header--nav-btn", function() {
    $(".header").addClass("active")
  });

  $(document).on("click", ".header--mobile-overlay", function() {
    $(".header").removeClass("active")
  })
});


// //// 
window.addEventListener('scroll' , ()=> {
  const topBtn = document.getElementById('stick-header');
  if (document.documentElement.scrollTop > 20) {
      topBtn.classList.add('sticky-head')
  } else {
      topBtn.classList.remove('sticky-head')
  }
});
function toTop () {
  document.documentElement.scrollTop = 0;
}
function articlesFUNC() {
  var item = new Swiper(".articles__slider", {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      spaceBetween: 30,
  
      pagination: {
          el: ".articles .swiper-pagination",
          clickable: true,
      },
      /*cardsEffect: {
          perSlideRotate: 10,
          perSlideOffset: 2,
          slideShadows: false
      },*/
      breakpoints: {
      570:{
          slidesPerView: 2,
      },
      790: {
          slidesPerView: 3,
      },
      1100: {
          slidesPerView: 4,
      },
      1450: {
          slidesPerView: 5,
      },
      },
  });
  }
  
  articlesFUNC();
  
  function fashionFUNC() {
      var item = new Swiper(".fashion-celebration", {
          slidesPerView: 1,
          loop: true,
          speed: 600,
          spaceBetween: 30,
  
  
  
         // effect: "cards",
          // autoplay: {
          //     delay: 5000,
          //     disableOnInteraction: false,
          //     pauseOnMouseEnter: true,
          // },
          navigation: {
              nextEl: ".fashion-celebration .swiper-button-next",
          prevEl: ".fashion-celebration .swiper-button-prev",
          },
          pagination: {
              el: ".fashion-celebration .swiper-pagination",
              clickable: true,
          },
          /*cardsEffect: {
              perSlideRotate: 10,
              perSlideOffset: 2,
              slideShadows: false
          },*/
          breakpoints: {
              950: {
                  slidesPerView: 2,
              },
              loop: false,
  
              1200: {
                  slidesPerView: 1
              }
          },
      });
  }
  
  fashionFUNC();
  
  /*let li = document.querySelector(".active");
  let menu = document.querySelector(".dropdown-menu");


  console.log(menu);
  li.onclick = function(){
    menu.style.visibility="visible";
    menu.style.opacity="1";
  }
  */
