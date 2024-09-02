// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

function scrollToTop() {
  const scrollDuration = 600; // Total duration of scroll in milliseconds
  const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate the scroll step
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep); // Scroll by calculated step
    } else {
      clearInterval(scrollInterval); // Stop scrolling when top is reached
    }
  }, 15); // Interval time in milliseconds
}

// mobile navbar
document.getElementById("burger").addEventListener("click", function () {
  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
  } else {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
  }
});

// Menutup menu ketika salah satu link di klik
document.querySelectorAll("#mobile-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("flex");
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// panorama

      const panoramaImage = new PANOLENS.ImagePanorama(
        "assets/img/gerbang.jpg"
      );
      const imageContainer = document.querySelector(".makam");

      const viewer = new PANOLENS.Viewer({
        container: imageContainer,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        controlBar: false,
      });

      viewer.add(panoramaImage);