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
    });
  }
  burgerMenu();

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
            behavior: 'smooth',
          });
        };
      },
    };

    btnUp.addEventListener();
  }
  scrollTop();

  // Аккордеон
  function accordion() {
    const acItem = document.querySelectorAll('.accordion .ac-btn'),
      acText = document.querySelectorAll('.accordion .ac-text');

    acText.forEach((e) => {
      e.classList.add('overflow-hidden');
    });

    acItem.forEach((e) => {
      e.addEventListener('click', () => {
        const acContent = e.nextElementSibling;

        if (acContent.style.maxHeight) {
          document.querySelectorAll('.accordion .ac-text').forEach((e) => (e.style.maxHeight = null));
          e.classList.remove('active');
        } else {
          document.querySelectorAll('.accordion .ac-text').forEach((e) => (e.style.maxHeight = null));
          acContent.style.maxHeight = acContent.scrollHeight + 'px';
          e.classList.add('active');
        }
      });
    });
  }
  accordion();

  /// Отправка форм
  (function () {
    let submitButtons = document.querySelectorAll('button.submit');

    /// novalid если не прошла валидацию запрещаем отправку
    for (let submitButton of submitButtons) {
      submitButton.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('submit')) {
          let formNovalid = target.closest('.novalid');
          if (formNovalid) {
            event.preventDefault();
          }
        }
      });
    }
  })();
});
