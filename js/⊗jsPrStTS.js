const tagsDB = {
  a: {
    description:
      "Является одним из важных элементов HTML и предназначен для создания ссылок",
    example: '<a href="https://example.com">Пример ссылки</a>',
  },
  div: {
    description:
      "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.",
    example: "<div>...</div>",
  },
  p: {
    description:
      "Тег <p> определяет параграф текста. Это блочный элемент, который автоматически добавляет отступы до и после абзаца.",
    example: "<p>Это пример параграфа текста.</p>",
  },
  h1: {
    description:
      "Тег <h1> представляет собой заголовок первого уровня. Используется для основных заголовков страницы.",
    example: "<h1>Главный заголовок страницы</h1>",
  },
  img: {
    description:
      "Тег <img> предназначен для вставки изображений на веб-страницу. Требует атрибута src с указанием пути к изображению.",
    example: '<img src="image.jpg" alt="Описание изображения">',
  },
  ul: {
    description:
      "Тег <ul> создает неупорядоченный (маркированный) список. Элементы списка помещаются в теги <li>.",
    example: "<ul><li>Первый пункт</li><li>Второй пункт</li></ul>",
  },
  span: {
    description:
      "Тег <span> является строчным элементом, предназначенным для выделения части текста или других строчных элементов.",
    example: '<span style="color: red;">Красный текст</span>',
  },

  // Новые теги
  button: {
    description:
      "Тег <button> создает кликабельную кнопку, которая может использоваться для отправки форм или выполнения JavaScript-действий.",
    example: '<button onclick="alert("Клик!")">Нажми меня</button>',
  },
  input: {
    description:
      "Тег <input> используется для создания полей ввода, таких как текстовые поля, чекбоксы, радио-кнопки и др.",
    example: '<input type="text" placeholder="Введите текст">',
  },
  form: {
    description:
      "Тег <form> определяет HTML-форму для ввода данных, которые могут быть отправлены на сервер.",
    example:
      '<form action="/submit" method="post"><input type="text" name="username"></form>',
  },
  table: {
    description:
      "Тег <table> создает таблицу. Внутри него используются <tr> (строка), <th> (заголовок), <td> (ячейка).",
    example:
      "<table><tr><th>Заголовок</th></tr><tr><td>Данные</td></tr></table>",
  },
  nav: {
    description:
      "Тег <nav> предназначен для навигационных ссылок по сайту (меню, пагинация и т. д.).",
    example: "<nav><a href='/'>Главная</a><a href='/about'>О нас</a></nav>",
  },
  video: {
    description:
      "Тег <video> позволяет встраивать видео на страницу. Поддерживает несколько форматов (MP4, WebM и др.).",
    example:
      '<video controls><source src="movie.mp4" type="video/mp4"></video>',
  },
  style: {
    description:
      "Тег <style> используется для встраивания CSS-стилей непосредственно в HTML-документ.",
    example: "<style>body { background: #f0f0f0; }</style>",
  },
  script: {
    description:
      "Тег <script> предназначен для встраивания или подключения JavaScript-кода.",
    example: '<script>console.log("Hello!");</script>',
  },
};

// DOM елементы
const searchInput = document.querySelector(".input-search");
const tagName = document.querySelector(".tag-name");
const tagDescription = document.querySelector(".tag-description");
const codeExample = document.querySelector(".tag-example");

// Обработчик события
searchInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let value = e.target.value.trim().toLowerCase();
    showTagInfo(value);
    e.target.value = "";
  }
});

// Вывод информации о теге
function showTagInfo(tag) {
  if (tagsDB[tag]) {
    document.querySelector(".content").style.display = "block";
    tagName.textContent = `<${tag}>`;
    tagDescription.textContent = tagsDB[tag].description;
    codeExample.textContent = tagsDB[tag].example;
  } else {
    tagName.textContent = "Тег не найден";
    tagDescription.textContent = "";
    codeExample.textContent = "";
  }
}
