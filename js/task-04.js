// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const counterValue = {
  value: 0,
  increment(value) {
    this.value += 1;
  },
  decrement(value) {
    this.value -= 1;
  },
};
const decbtn = document.querySelector('button[data-action ="decrement"]');
const incbtn = document.querySelector('button[data-action ="increment"]');
const valueEl = document.querySelector("#value")

decbtn.addEventListener("click", () => {
     counterValue.decrement();
    valueEl.textContent = counterValue.value;
});
incbtn.addEventListener("click" () => {
     counterValue.increment();
    valueEl.textContent = counterValue.value;
})