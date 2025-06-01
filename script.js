const sections = document.querySelectorAll('.tile');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => observer.observe(section));
