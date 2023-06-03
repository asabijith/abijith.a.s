  // Pause the video when the window loses focus
  window.addEventListener("blur", function() {
    document.getElementById("video-background").pause();
  });

  // Resume the video when the window gains focus
  window.addEventListener("focus", function() {
    document.getElementById("video-background").play();
  });



  document.addEventListener("DOMContentLoaded", function() {
    var animateText = document.querySelector(".animate-text");
  
    function checkScroll() {
      var scrollPosition = window.innerHeight + window.scrollY;
      var elementPosition = animateText.offsetTop + animateText.offsetHeight;
  
      if (scrollPosition >= elementPosition) {
        animateText.classList.add("show");
      }
    }
  
    window.addEventListener("scroll", checkScroll);
  });
  






