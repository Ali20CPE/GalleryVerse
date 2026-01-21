(function ($) {
    'use strict';

    var alime_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    alime_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });
    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#alimeNav').classyNav();
    }

    // *********************************
    // :: 3.0 Welcome Slides Active Code
    // *********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            // loop: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 10000,
            nav: true,
            navText: [('<i class="ti-arrow-left"></i>'), ('<i class="ti-arrow-right"></i>')]
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // ************************************
    // :: 4.0 Instragram Slides Active Code
    // ************************************

    if ($.fn.owlCarousel) {
        var instagramFeedSlider = $('.instragram-feed-area');
        instagramFeedSlider.owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        })
    }

    // *********************************
    // :: 5.0 Masonary Gallery Active Code
    // *********************************

    if ($.fn.imagesLoaded) {
        $('.alime-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.alime-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // ***********************************
    // :: 6.0 Portfolio Button Active Code
    // ***********************************
    
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // ********************************
    // :: 7.0 Search Button Active Code
    // ********************************
    $('.search-btn').on('click', function () {
        $('.search-form').toggleClass('search-form-active');
    })

    // ************************
    // :: 8.0 Stick Active Code
    // ************************

    alime_window.on('scroll', function () {
        if (alime_window.scrollTop() > 0) {
            $('.main-header-area').addClass('sticky');
        } else {
            $('.main-header-area').removeClass('sticky');
        }
    });

    // *********************************
    // :: 9.0 Magnific Popup Active Code
    // *********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
        $('.portfolio-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                preload: [0, 2],
                navigateByImgClick: true,
                tPrev: 'Previous',
                tNext: 'Next'
            }
        });
    }

    // **************************
    // :: 10.0 Tooltip Active Code
    // **************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 11.0 WOW Active Code
    // ***********************
    if (alime_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 12.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }

    // ****************************
    // :: 13.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        alime_window.scrollUp({
            scrollSpeed: 1000,
            scrollText: '<i class="arrow_carrot-up"</i>'
        });
    }

    // *********************************
    // :: 14.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);

document.getElementById("classical-link").addEventListener("click", function(e) {
    e.preventDefault();
  
    const btn = document.getElementById("classical-btn");
    btn.click();               
    btn.scrollIntoView({       
      behavior: "smooth",      
      block: "center"          
    });
  });

document.getElementById("modern-link").addEventListener("click", function(e) {
    e.preventDefault(); 
  
    const btn = document.getElementById("modern-btn");
    btn.click();               
    btn.scrollIntoView({       
      behavior: "smooth",      
      block: "center"          
    });
  });

document.getElementById("ai-link").addEventListener("click", function(e) {
    e.preventDefault(); 
  
    const btn = document.getElementById("ai-btn");
    btn.click();               
    btn.scrollIntoView({       
      behavior: "smooth",      
      block: "center"          
    });
});

// document.getElementById("all-l").addEventListener("click", function(e) {
//     e.preventDefault(); 
  
//     const btn = document.getElementById("all-b");               
//     btn.scrollIntoView({       
//       behavior: "smooth",      
//       block: "center"          
//     });
// });

function openArtModala1() {
    document.getElementById('artModala1').style.display = 'block';
}
// function openArtModala2() {
//     document.getElementById('artModala2').style.display = 'block';
// }
// function openArtModala3() {
//     document.getElementById('artModala3').style.display = 'block';
// }
// function openArtModala4() {
//     document.getElementById('artModala4').style.display = 'block';
// }
function openArtModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeArtModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.art-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}



// بيانات كل سلايدر
const sliders = [
    {
        id: "slider1",
        title: "Explore our Featured Artists",
        highlight: ["Featured Artists"],
      artists: [
        {
          name: "Leonardo da Vinci",
          image: "img/c1.jpg",
          alt: "Leonardo",
          nationality: "Italian",
          age: 67,
          works: "20 Masterpieces",
          link: "leonardo.html"
        },
        {
          name: "Frida Kahlo",
          image: "img/c2.jpg",
          alt: "Frida Kahlo",
          nationality: "Mexican",
          age: 47,
          works: "55 Paintings",
          link: "frida.html"
        }
      ]
    },
    {
        id: "slider2",
        title: "Explore our Featured Artists",
        highlight: ["Featured Artists"],
      artists: [
        {
          name: "Pablo Picasso",
          image: "img/m1.jpg",
          alt: "Picasso",
          nationality: "Spanish",
          age: 91,
          works: "50000+ Artworks",
          link: "picasso.html"
        },
        {
          name: "Salvador Dalí",
          image: "img/m2.jpg",
          alt: "Dali",
          nationality: "Spanish",
          age: 84,
          works: "1500+ Pieces",
          link: "dali.html"
        }
      ]
    }
  ];
  
  // دالة رسم السلايدر
  function renderArtistSlider({ id, title, artists, highlight = [] }, repeatCount = 4) {
    const section = document.createElement("div");
    section.id = id;
  
    // لوّن كل الكلمات المحددة باللون الأصفر داخل العنوان
    let formattedTitle = title;
    highlight.forEach(word => {
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // نمنع مشاكل regex
      const regex = new RegExp(`\\b(${escapedWord})\\b`, 'g');
      formattedTitle = formattedTitle.replace(
        regex,
        `<span style="color: yellow;">$1</span>`
      );
    });
  
    section.innerHTML = `
  <div style="width: 100vw; margin-left: -50vw; left: 50%; position: relative;" class="my-3">
    <h3 class="qu fs-4 text-white fw-bold py-2 px-3 rounded" style="text-align: left;">
      ${formattedTitle}
    </h3>
  </div>

  <div class="container my-5">
    <div class="artist-slider">
      <div class="slider-track" id="${id}-track"></div>
    </div>
  </div>
`;

  
    document.getElementById("slidersWrapper").appendChild(section);
  
    const track = section.querySelector(`#${id}-track`);
    const fragment = document.createDocumentFragment();
  
    for (let i = 0; i < repeatCount; i++) {
      artists.forEach(artist => {
        const card = document.createElement("div");
        card.className = "artist-card";
        card.innerHTML = `
          <a href="${artist.link}">
            <img src="${artist.image}" alt="${artist.alt}">
            <div class="artist-info">
              <strong>${artist.name}</strong><br>
              ${artist.nationality} | Age: ${artist.age} | ${artist.works}
            </div>
          </a>
        `;
        fragment.appendChild(card);
      });
    }
  
    track.appendChild(fragment);
  }
  
  
  // تنفيذ كل السلايدرز بدون تكرار
  sliders.forEach(slider => renderArtistSlider(slider));
  




  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.art-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.style.animation = `cardEntrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
                }, delay);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.dataset.delay = `${index * 100}ms`;
        observer.observe(card);
    });
});

