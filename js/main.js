// ( function(){
//   const burger = document.querySelector('.burger');
//   burger.addEventListener('click', () => {
//     burger.classList.toggle('burger_active');
//   })
// })
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const body = document.body;

const menu = document.querySelector('#menu').cloneNode(1);

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle('open');
  hamb.classList.toggle('active');
  body.classList.toggle('noscroll');
  renderPopup();
}
// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
