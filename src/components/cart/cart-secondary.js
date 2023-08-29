// function runningNumbers (num) {
//   const time = 1000; // ms
//   const step = 1000;
//   let n = 1;
//   let t = Math.round(time / (num / step) );
//   let interval = setInterval(() => {
//     n += step;
//     if (n === num) clearInterval(interval);
//     console.log(n)
//   }, t);
// };


// Всплывающее сообщение о добавлении товара в корзину
function alertSuccessAdd (cardTitle) {
  const div = document.createElement("div");
  div.classList.add("cart__alert");
  div.textContent = `Товар ${cardTitle} добавлен в корзину`;
  header.appendChild(div);
  setTimeout(() => div.remove(), 3000);
};


