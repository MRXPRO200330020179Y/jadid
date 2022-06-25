let listVideo = document.querySelectorAll(".video-list .vid");
let mainVideo = document.querySelector(".main-video video");
let title = document.querySelector(".main-video .title");

listVideo.forEach(video => {
  video.onclick = () => {
    listVideo.forEach(vid => vid.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      let srs = video.children[0].getAttribute("src");
      mainVideo.src = srs;
    }
  };
});

$(document).ready(function () {
  $(".slider__top").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1381,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1121,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 831,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".research__top").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1381,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1231,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 871,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".news__top__pro").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,

  Image: {
    zoom: false,
    click: false,
    wheel: "slide",
  },
});

Fancybox.bind("[data-fancybox-plyr]", {
  on: {
    reveal: (fancybox, slide) => {
      if (typeof Plyr === undefined) {
        return;
      }

      let $el;

      if (slide.type === "html5video") {
        $el = slide.$content.querySelector("video");
      } else if (slide.type === "video") {
        $el = document.createElement("div");
        $el.classList.add("plyr__video-embed");

        $el.appendChild(slide.$iframe);

        slide.$content.appendChild($el);
      }

      if ($el) {
        slide.player = new Plyr($el);
      }
    },
    "Carousel.unselectSlide": (fancybox, carousel, slide) => {
      if (slide.player) {
        slide.player.pause();
      }
    },
    "Carousel.selectSlide": (fancybox, carousel, slide) => {
      if (slide.player) {
        slide.player.play();
      }
    },
  },
});
