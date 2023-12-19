const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
	btn.addEventListener('click', function (e) {
		e.stopPropagation();

		// Hide all hint
		for (let hint of infoHints) {
			if (this.parentNode.querySelector('.info-hint') !== hint) {
				hint.classList.add('none');
			}
		}

		console.log(this.parentNode.querySelector('.info-hint'))

		// Show current hint
		this.parentNode.querySelector('.info-hint').classList.toggle('none');
	});
}

// Закрываем подсказки при клике по всему документу
document.addEventListener('click', function () {
	for (let hint of infoHints) {
		hint.classList.add('none');
	}
});

// Запрещаем всплытие события клика при клике на подсказки
for (let hint of infoHints) {
	hint.addEventListener('click', (e) => e.stopPropagation());
}




/* SLIDER*/

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  
  slidesPerView: 1,
	spaceBetween: 42,
	loop: true,
	freeMode: true,

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 42,
		},
	}

});


// TABS

const tabsBtns = document.querySelectorAll('[data-tab]');
const Products = document.querySelectorAll('[data-tab-value]')


for (let tabBtn of tabsBtns)  {
	
	tabBtn.addEventListener('click', () => {
		
		// Убираем активные классы у всех кнопок
		for (let tabBtn of tabsBtns) {
			tabBtn.classList.remove('tab-controls__btn--active')
		}

		// Добавляем ативный класс к текущей кнопке
		tabBtn.classList.add('tab-controls__btn--active');

		// Отобразить нужные товары и скрыть ненужные
		for (let product of Products) {

			// Проверка на отображение всех товаров

			if(tabBtn.dataset.tab == 'all') {
				product.classList.remove('none')
			}
			else {
				if(product.dataset.tabValue == tabBtn.dataset.tab) {
					product.classList.remove('none')
				}
				else 
				product.classList.add('none')
			}
			
			
		}

		// Update swiper

		swiper.update()

	})
	
}

// Mobile Nav


const mobNavOpenBtn = document.querySelector('#mobNavOpenBtn');
const mobileNav = document.querySelector('#mobileNav');
const mobNavCloseBtn = document.querySelector('#mobNavCloseBtn');
const mobSearch = document.querySelector('#mobSearch')


mobNavOpenBtn.onclick = function() {
	mobileNav.classList.add('mobile-nav-wrapper--open')
}

mobNavCloseBtn.onclick = function() {
	mobileNav.classList.remove('mobile-nav-wrapper--open')
}

window.addEventListener('resize', (e)=> {
	const winWidth = window.innerWidth;                        
	// console.log(winWidth);
	if(winWidth >= 992) {
		mobileNav.classList.remove('mobile-nav-wrapper--open')
		mobSearch.classList.remove('mob-search-wrapper--open-search')
	}
	else {
		mobSearch.classList.add('mob-search-wrapper--open-search')
	}
})









