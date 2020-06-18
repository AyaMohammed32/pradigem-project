//active nav
$(document).ready(function() {
    $(function() {

        var url = window.location.pathname,
            urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
        $('.navbar-nav a').each(function() {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('current').addClass('current-mobile');
            }
        });

        if ($(".hellonow").hasClass("homenow")) {
            $(".navbar-nav li:nth-of-type(2) a, .navbar-nav li:nth-of-type(3) a, .navbar-nav li:nth-of-type(4) a, .navbar-nav li:nth-of-type(5) a, .navbar-nav li:nth-of-type(6) a, .navbar-nav li:nth-of-type(7) a").removeClass('current').removeClass('current-mobile');
        }

    });
});



/*fancybox images*/
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
