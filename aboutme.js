// Находим все блоки с классом "small-container"
const blocks = document.querySelectorAll('.small-container');

// Добавляем обработчик события на клик для каждого блока
blocks.forEach(block => {
  block.addEventListener('click', function () {
    // Убираем класс 'clicked' у всех блоков
    blocks.forEach(b => b.classList.remove('clicked'));

    // Добавляем класс 'clicked' на текущий блок
    this.classList.add('clicked');
  });
});
