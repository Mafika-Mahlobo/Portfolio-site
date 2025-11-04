const section = document.getElementById('intro-text');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    observer.observe(section);


    // Simple slideshow functionality
    document.addEventListener('DOMContentLoaded', () => {
      // Image slider functionality
      const slideContainers = document.querySelectorAll('.slide-container');
      slideContainers.forEach(container => {
      let currentIndex = 0;
      const slides = container.querySelectorAll('.slide-image');
      slides[currentIndex].style.display = 'block';

      setInterval(() => {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = 'block';
      }, 3000); // Change image every 3 seconds
    });
  });

  const resumeBtn = document.querySelector(".resume-button");
  const mobileMenuIcon = document.querySelector(".fa-bars");

  resumeBtn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "/static/documents/Mafika_Mahlobo.pdf";
      link.download = "Mafika_Mahlobo.pdf";
      link.click();
  });

  document.querySelector(".app1-download").addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "/static/documents/cargoflow.apk";
      link.download = "cargoflow.apk";
      link.click();
  });

  mobileMenuIcon.addEventListener("click", () => {
      document.querySelector(".mobile-nav").style.display = "block";
  });

  document.querySelector(".cancel-mobile-container").addEventListener("click", () => {
    document.querySelector(".mobile-nav").style.display = "none";
  });

  document.querySelector(".comming").addEventListener("click", () => {
    document.querySelector(".overly").style.display = "block";
  });

  document.querySelector(".cancel").addEventListener("click", () => {
      document.querySelector(".overly").style.display = "none";
  });