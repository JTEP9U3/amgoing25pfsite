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

const scrollContainer = document.querySelector('.scroll-container');
const scrollUp = document.querySelector('.arrow.up');
const scrollDown = document.querySelector('.arrow.down');

scrollContainer.addEventListener('scroll', () => {
const scrollTop = scrollContainer.scrollTop;
const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;

if (scrollTop === 0) {
// 最上部：下だけ表示
scrollUp.style.display = 'none';
scrollDown.style.display = 'block';
} else if (scrollTop >= maxScroll - 1) {
// 最下部：上だけ表示
scrollUp.style.display = 'block';
scrollDown.style.display = 'none';
} else {
// 中間：上下表示
scrollUp.style.display = 'block';
scrollDown.style.display = 'block';
}
});

// ページ読み込み時にも初期状態を設定
window.addEventListener('load', () => {
scrollContainer.dispatchEvent(new Event('scroll'));
});

sections.forEach(section => observer.observe(section));
