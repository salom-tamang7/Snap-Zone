let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let current = 0;
let interval = setInterval(nextSlide, 3000); // Change slide every 3s

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
  current = index;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Button events
document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetTimer();
});
document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

// Dot events
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    resetTimer();
  });
});

// Reset autoplay timer
function resetTimer() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}
