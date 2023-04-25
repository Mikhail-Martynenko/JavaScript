// Почему не работает return false?
// Почему в коде ниже return false не работает?
//
// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>
//
// <a href="https://w3.org" onclick="handler(event)">браузер откроет w3.org</a>
//
// Браузер переходит по указанной ссылке, но нам этого не нужно.
//
// Как поправить?

// Можно использовать event.preventDefault()
function handler(event) {
    event.preventDefault()
    alert( "..." );
}