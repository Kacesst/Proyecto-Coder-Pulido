window.addEventListener("scroll", function() {
    var container = document.querySelector(".container");
    var position = container.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
  
    if (position < screenPosition) {
      container.classList.add("show");
    }
  });