const sections = document.querySelectorAll('.tile');
const scrollContainer = document.querySelector('.scroll-container');
const scrollUp = document.querySelector('.arrow.up');
const scrollDown = document.querySelector('.arrow.down');

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

scrollContainer.addEventListener('scroll', () => {
  const scrollTop = scrollContainer.scrollTop;
  const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;

  if (scrollTop <= 1) {
    scrollUp.style.display = 'none';
    scrollDown.style.display = 'block';
  } else if (scrollTop >= maxScroll - 1) {
    scrollUp.style.display = 'block';
    scrollDown.style.display = 'none';
  } else {
    scrollUp.style.display = 'block';
    scrollDown.style.display = 'block';
  }
});

window.addEventListener('load', () => {
  scrollUp.style.display = 'none';
  scrollDown.style.display = 'block';
  scrollContainer.dispatchEvent(new Event('scroll'));
});


