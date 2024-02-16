window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("scroll-to").style.opacity = "1";
    } else {
        document.getElementById("scroll-to").style.opacity = "0";
    }
};
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function(e) {
		 e.preventDefault();

		 let href = this.getAttribute('href').substring(1);

		 const scrollTarget = document.getElementById(href);

		 const topOffset = document.querySelector('.scrollto').offsetHeight;
		 const elementPosition = scrollTarget.getBoundingClientRect().top;
		 const offsetPosition = elementPosition - topOffset;

		 window.scrollBy({
			  top: offsetPosition,
			  behavior: 'smooth'
		 });
	});
});

let burger = document.querySelector(".container-burger");
let menu = document.querySelector("#mySidenav");
let body = document.querySelector("body");

burger.onclick = function(){
	menu.classList.toggle("active");
	burger.classList.toggle("change");
	body.classList.toggle("lock");
};

function closeNav() {
	menu.classList.toggle("active");
	burger.classList.remove("change");
	body.classList.remove("lock");
}
document.addEventListener('DOMContentLoaded', () => { 
 
	window.addEventListener('click', e => { // при клике в любом месте окна браузера
	  const target = e.target // находим элемент, на котором был клик
	  if (!target.closest('#mySidenav') && !target.closest('.container-burger')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
		menu.classList.remove('active'); // то закрываем окно навигации, удаляя активный класс
		burger.classList.remove("change");
		body.classList.remove("lock");
	  }
	})
 
 })

