document.addEventListener('DOMContentLoaded', () => {
  // Скрытие подгрузки контента
  document.querySelector('body').classList.add('loading');

  // Мобильное меню
  function burgerMenu() {
    const burgerBtn = document.getElementById('burger-toggle');
    const burgerMenu = document.getElementById('burger-menu');

    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('open');
      burgerMenu.classList.toggle('active');
    })
  }
  burgerMenu()

  // Стрелка прокрутка на вверх
  function scrollTop() {
    const burgerMenu = document.getElementById('scrollTop');

    const btnUp = {
      el: burgerMenu,
      show() {
        // удалим у кнопки класс active
        this.el.classList.remove('scroll-top_active');
      },
      hide() {
        // добавим к кнопке класс active
        this.el.classList.add('scroll-top_active');
      },
      addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
          // определяем величину прокрутки
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
          scrollY > 400 ? this.show() : this.hide();
        });
        // при нажатии на кнопку
        burgerMenu.onclick = () => {
          // переместим в начало страницы
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }

    btnUp.addEventListener();
  }
  scrollTop()

  // Аккордеон
  this._el.addEventListener('click', (e) => {
    // получим элемент .ac-btn
    const elHeader = e.target.closest('.ac-btn');
    // если такой элемент не найден, то прекращаем выполнение функции
    if (!elHeader) {
      return;
    }
    // если необходимо, чтобы всегда был открыт один элемент
    if (!this._config.alwaysOpen) {
      // получим элемент с классом ac-text и сохраним его в переменную elOpenItem
      const elOpenItem = this._el.querySelector('.ac-text');
      // если такой элемент есть
      if (elOpenItem) {
        // и он не равен текущему, то переключим ему класс ac-text
        elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('ac-text') : null;
      }
    }
    // переключим класс ac-text элемента .accordion__header
    elHeader.parentElement.classList.toggle('ac-text');
  });
})