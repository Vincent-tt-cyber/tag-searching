// БД тегов
const tagsDB = {
  a: {
    description:
      "Является одним из важных элементов HTML и предназначен для создания ссылок",
    example: '<a href="https://example.com">Пример ссылки</a>',
  },
  div: {
    description:
      "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.",
    example: '<a href="https://example.com">Пример ссылки</a>',
  },
};

// DOM елементы
const searchInput = document.querySelector(".input-search");
const tagName = document.querySelector(".tag-name");

searchInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let value = e.target.value.trim().toLowerCase();
    showTagInfo(value);
  }
});

// Вывод информации о теге
function showTagInfo(tag) {
  if (tagsDB[tag]) {
    tagName.textContent = `<${tag}>`;
  }
}
