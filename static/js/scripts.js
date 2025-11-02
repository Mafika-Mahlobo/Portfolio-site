const section = document.getElementById('intro-text');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    observer.observe(section);