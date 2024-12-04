var swiper = new Swiper('.swiper', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
}); 
document.addEventListener("DOMContentLoaded", () => {
	// Variables
	const elements = document.querySelectorAll(".scroll-effect");
	const cards = document.querySelectorAll('.swiper-slide');
	const sectionCards = document.querySelector('.section-cards');
	const photoItems = document.querySelectorAll(".photo-item");
	const sectionCardsTitle = document.querySelector(".section-cards__content");
	const sectionGalleryTitle = document.querySelector(".section-galeria__content");

	// Evento de scroll
	window.addEventListener("scroll", () => {
		const currentScroll = window.scrollY;

		// Mostrar u ocultar los elementos con .scroll-effect
		if (currentScroll > 100) {
			elements.forEach(el => el.classList.add("hidden"));
		} else {
			elements.forEach(el => el.classList.remove("hidden"));
		}

		// Animación de las cartas cuando entran en el viewport
		if (sectionCards.getBoundingClientRect().top < window.innerHeight * 0.8) {
			cards.forEach((card, index) => {
				setTimeout(() => {
					card.classList.add('show', 'blur-in-expand');
				}, index * 200); // Retraso entre cada carta
			});
		}

		// Animación para el título de las cartas
		if (sectionCardsTitle.getBoundingClientRect().top < window.innerHeight * 0.5) {
			sectionCardsTitle.classList.add("animate");
		}

		// Animación para el título de la galería
		if (sectionGalleryTitle.getBoundingClientRect().top < window.innerHeight * 0.5) {
			sectionGalleryTitle.classList.add("animate");
		}

		// Animación para las fotos cuando se ven en pantalla
		photoItems.forEach(item => {
			if (item.getBoundingClientRect().top < window.innerHeight * 0.5) {
				item.classList.add("visible");
			}
		});
		
	});
});


