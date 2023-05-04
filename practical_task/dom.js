/*Напишите функцию для получения имени и фамилии из формы
<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8 />
    <title>Return first and last name from a form - w3resource</title>
  </head>
  <body>
    <form id="form1" onsubmit="getFormValue()">
      First name: <input type="text" name="fname" value="David"><br>
      Last name: <input type="text" name="lname" value="Beckham"><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>*/

function getFormValue() {
    const firstName = document.querySelector('#form1 [name="fname"]');
    const lastName = document.querySelector('#form1 [name="lname"]');
    if (!firstName || !lastName) return "Ошибка";

    return [firstName.value, lastName.value];
}

console.log(getFormValue());


// 3) Напишите функцию JavaScript для добавления строк в таблицу.
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8" />
//     <title>Insert row in a table - w3resource</title>
// </head>
// <body>
// <table id="sampleTable" border="1">
//     <tr>
//         <td>Row1 cell1</td>
//         <td>Row1 cell2</td>
//     </tr>
//     <tr>
//         <td>Row2 cell1</td>
//         <td>Row2 cell2</td>
//     </tr>
// </table>
// <br />
// <input type="button" onclick="insert_Row()" value="Insert row" />
// </body>
// <script>
//     function insert_Row() {
//     const table = document.getElementById("sampleTable");
//     const row = table.insertRow(-1);
//     const cell1 = row.insertCell(0);
//     const cell2 = row.insertCell(1);
//     cell1.innerHTML = "New row cell 1";
//     cell2.innerHTML = "New row cell 2";
// }
// </script>
// </html>



//4) Напишите программу на JavaScript для вычисления объема сферы.

// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8" />
//     <title>Вычисление объема сферы</title>
//   </head>
//   <body>
//     <form>
//       <label for="radius">Радиус сферы:</label>
//       <input type="number" id="radius" name="radius" /><br /><br />
//       <input type="button" value="Вычислить объем" onclick="calcVolume()" />
//     </form>
//     <br />
//     <div id="result"></div>
//   </body>
//   <script async>
//     const calcVolume = () => {
//       const radius = document.getElementById("radius").value;
//       const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
//       const result = document.getElementById("result");
//       result.innerHTML = "Объем сферы: " + volume.toFixed(3);
//     };
//   </script>
// </html>