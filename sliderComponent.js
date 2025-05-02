const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.carousel-button.next');
const prevBtn = document.querySelector('.carousel-button.prev');

let currentSlide = 0;
let autoSlideTimeout;

function updateSlide(index) {
	const slideWidth = slides[0].offsetWidth + 30;
	track.style.transform = `translateX(-${slideWidth * index}px)`;
	currentSlide = index;

	dots.forEach((dot) => dot.classList.remove('active'));
	dots[index].classList.add('active');
}

function startAutoSlide() {
	clearTimeout(autoSlideTimeout);

	autoSlideTimeout = setTimeout(() => {
		const nextIndex = (currentSlide + 1) % slides.length;
		updateSlide(nextIndex);
		startAutoSlide();
	}, 5000);
}

nextBtn.addEventListener('click', () => {
	const nextIndex = (currentSlide + 1) % slides.length;
	updateSlide(nextIndex);
	startAutoSlide();
});

prevBtn.addEventListener('click', () => {
	const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
	updateSlide(prevIndex);
	startAutoSlide();
});

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		updateSlide(index);
		startAutoSlide();
	});
});

window.addEventListener('load', () => {
	updateSlide(0);
	startAutoSlide();
});

/* const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const dots = document.querySelectorAll('.dot');

const slideWidth = slides[0].getBoundingClientRect().width;
let currentSlide = 0;

// Arrange slides
slides.forEach((slide, index) => {
	slide.style.left = slideWidth * index + 'px';
});

const updateSlide = (targetIndex) => {
	const amountToMove = slides[targetIndex].offsetLeft; // ✅ safer
	track.style.transform = `translateX(-${amountToMove}px)`;
	currentSlide = targetIndex;
	updateDots(targetIndex);
};

const updateDots = (index) => {
	dots.forEach((dot) => dot.classList.remove('active'));
	dots[index].classList.add('active');
};

nextButton.addEventListener('click', () => {
	const nextIndex = (currentSlide + 1) % slides.length;
	updateSlide(nextIndex);
});

prevButton.addEventListener('click', () => {
	const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
	updateSlide(prevIndex);
});

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		updateSlide(index);
	});
});

// Auto-slide
setInterval(() => {
	const nextIndex = (currentSlide + 1) % slides.length;
	updateSlide(nextIndex);
}, 10000);
 */
/* // javascript;
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
slides.forEach((slide, index) => {
	slide.style.left = slideWidth * index + 'px';
});

let currentSlide = 0;

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + slides[targetSlide].style.left + ')';
	currentSlide = targetSlide;
};

nextButton.addEventListener('click', () => {
	if (currentSlide < slides.length - 1) {
		moveToSlide(track, currentSlide, currentSlide + 1);
		currentSlide++;
	} else {
		moveToSlide(track, currentSlide, 0);
		currentSlide = 0;
	}
});

prevButton.addEventListener('click', () => {
	if (currentSlide > 0) {
		moveToSlide(track, currentSlide, currentSlide - 1);
		currentSlide--;
	} else {
		moveToSlide(track, currentSlide, slides.length - 1);
		currentSlide = slides.length - 1;
	}
});

// Auto-slide functionality
setInterval(() => {
	if (currentSlide < slides.length - 1) {
		moveToSlide(track, currentSlide, currentSlide + 1);
		currentSlide++;
	} else {
		moveToSlide(track, currentSlide, 0);
		currentSlide = 0;
	}
}, 3000);

// Touch/swipe functionality
let startX;
track.addEventListener('touchstart', (e) => {
	startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
	const endX = e.changedTouches[0].clientX;
	if (startX - endX > 50) {
		// Swiped left
		if (currentSlide < slides.length - 1) {
			moveToSlide(track, currentSlide, currentSlide + 1);
			currentSlide++;
		} else {
			moveToSlide(track, currentSlide, 0);
			currentSlide = 0;
		}
	} else if (endX - startX > 50) {
		// Swiped right
		if (currentSlide > 0) {
			moveToSlide(track, currentSlide, currentSlide - 1);
			currentSlide--;
		} else {
			moveToSlide(track, currentSlide, slides.length - 1);
			currentSlide = slides.length - 1;
		}
	}
});
 */
