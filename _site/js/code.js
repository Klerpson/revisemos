/*WhatsApp functionality*/
document.addEventListener("DOMContentLoaded",function(){var e=/iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent),t=window.location.href,o=document.querySelectorAll("a#lead_whatsapp");o.forEach(function(o){var n="Hi! I need more info about this: "+encodeURIComponent(t),a="https://wa.me/16143843087?text="+n,r="https://web.whatsapp.com/send?phone=16143843087&text="+n;e?o.setAttribute("href",a):o.setAttribute("href",r)})});

document.addEventListener('DOMContentLoaded', () => {
  const toggleArrows = document.querySelectorAll('.toggle-arrow');
  const isMobile = () => window.innerWidth <= 1200;

  toggleArrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
      if (isMobile()) {
        e.preventDefault();
        const submenuWrapper = arrow.closest('.has-submenu').querySelector('.submenu');
        
        document.querySelectorAll('.submenu.open').forEach(menu => {
          if (menu !== submenuWrapper) {
            menu.classList.remove('open');
            menu.closest('.has-submenu').querySelector('.toggle-arrow').classList.remove('rotated');
          }
        });

        submenuWrapper.classList.toggle('open');
        arrow.classList.toggle('rotated');
      }
    });
  });

  /* Cerrar submenús al hacer clic fuera (solo en móvil)*/
  document.addEventListener('click', (e) => {
    if (isMobile() && !e.target.closest('.has-submenu')) {
      document.querySelectorAll('.submenu.open').forEach(menu => {
        menu.classList.remove('open');
        menu.closest('.has-submenu').querySelector('.toggle-arrow').classList.remove('rotated');
      });
    }
  });
});


/* Social float functionality*/
document.addEventListener('scroll', function() {
  const postContainer = document.querySelector('.post-container');
  
  if (!postContainer) return;
  
  const socialFloat = document.querySelector('.social-float');
  const postHeader = document.querySelector('.post-header');
  const footer = document.querySelector('.footer');
  
  if (!socialFloat || !postHeader || !footer) return;
  
  const headerBottom = postHeader.offsetTop + postHeader.offsetHeight;
  const footerTop = footer.offsetTop;
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > headerBottom && scrollPosition < footerTop - 500) {
    socialFloat.style.opacity = '1';
    socialFloat.style.visibility = 'visible';
  } else {
    socialFloat.style.opacity = '0';
    socialFloat.style.visibility = 'hidden';
  }
});

/*funcionalidad de el scroll*/

document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) { 
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  });

  scrollButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
