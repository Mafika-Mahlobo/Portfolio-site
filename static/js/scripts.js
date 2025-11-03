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