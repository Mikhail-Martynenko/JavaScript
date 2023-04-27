/*Добавьте пункт к выпадающему списку
Имеется <select>:

<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>
Используя JavaScript:

Выведите значение и текст выбранного пункта.
Добавьте пункт: <option value="classic">Классика</option>.
Сделайте его выбранным.*/

const genres = document.getElementById('genres')
const selected = genres.options[genres.selectedIndex]
console.log(selected.value)
console.log(selected.text)


const option = new Option("Классика", "classic", true, true);

genres.append(option)