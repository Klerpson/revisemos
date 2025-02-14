// WHATSAPP SCREEN PROFILE
document.addEventListener("DOMContentLoaded", function () {
    var isMobile = /iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
    var currentURL = window.location.href;
    var whatsappLinks = document.querySelectorAll("a#lead_whatsapp");
    whatsappLinks.forEach(function (link) {
        var message = "Hola! Me gustaría recibir más información de esta propiedad: " + encodeURIComponent(currentURL);
        var mobileLink = "https://wa.me/573173730534?text=" + message;
        var desktopLink = "https://web.whatsapp.com/send?phone=573173730534&text=" + message;
        if (isMobile) {
            link.setAttribute("href", mobileLink);
        } else {
            link.setAttribute("href", desktopLink);
        }
    });
});

// SLIDER
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".slide-container");
    const firstImg = carousel.querySelectorAll("img")[0];
    const arrowIcons = document.querySelectorAll(".gallery-slider span");
    let isDragStart = false,
        isDragging = false,
        prevPageX,
        prevScrollLeft;
    const firstImgWidth = firstImg.clientWidth + 7;

    arrowIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;
        });
    });

    const dragStart = (e) => {
        isDragStart = true;
        isDragging = false;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (! isDragStart) 
            return;
        
        isDragging = true;
        e.preventDefault();
        carousel.classList.add("dragging");
        const positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    };

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");
        if (! isDragging) 
            return;
        
        isDragging = false;
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);
    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
    carousel.addEventListener("touchend", dragStop);
    carousel.addEventListener("dragstart", (e) => e.preventDefault());
});

// GALLERY
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.img-galeria');
    const imagenesLight = document.querySelector('.agregar-imagen');
    const contenedorLight = document.querySelector('.imagen-light');
    const closeBtn = document.querySelector('.close');

    const toggleLightbox = (show = true) => {
        contenedorLight.classList.toggle('show', show);
        imagenesLight.classList.toggle('showImage', show);
        document.body.style.overflow = show ? 'hidden' : '';
    };

    const handleImageClick = (e) => {
        imagenesLight.src = e.target.src;
        imagenesLight.alt = e.target.alt;
        toggleLightbox(true);
    };

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', handleImageClick);
    });

    closeBtn.addEventListener('click', () => toggleLightbox(false));

    contenedorLight.addEventListener('click', (e) => {
        if (e.target === contenedorLight) {
            toggleLightbox(false);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contenedorLight.classList.contains('show')) {
            toggleLightbox(false);
        }
    });
});

// NAV FIXED ON SCROLL
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav-scroll');
  const viewportHeight = window.innerHeight;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    // Si hemos scrolleado más allá del viewport inicial, mostramos el nav
    if (currentScroll > viewportHeight) {
      nav.classList.remove('nav-hidden');
    } else {
      // Si estamos en el primer viewport, ocultamos el nav
      nav.classList.add('nav-hidden');
    }
  });
});