const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const images = document.querySelectorAll('.slider img');

let counter = 0;
const width = slider.clientWidth;

function slide() {
  slider.style.transform = `translateX(${-counter * width}px)`;
}

function autoSlide() {
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  slide();
}

let intervalId = setInterval(autoSlide, 3000);

prevBtn.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  slide();
});

nextBtn.addEventListener('click', () => {
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  slide();
});

slider.addEventListener('mouseover', () => {
  clearInterval(intervalId);
});

slider.addEventListener('mouseout', () => {
  intervalId = setInterval(autoSlide, 3000);
});

  // Add event listeners to the navigation links
  document.getElementById('logo').addEventListener('click', function () {
      window.location.href = 'login.html';
  });

  document.getElementById('cart').addEventListener('click', function () {
      window.location.href = 'ecom.html';
  });

  
  document.querySelector('.search-bar').addEventListener('submit', function (event) {
      event.preventDefault();
      var searchInput = document.querySelector('.search-bar input[name="stock"]').value;
      
      console.log('Search:', searchInput);
  });



