let timerInterval;

document.getElementById('timerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // предотвращаем отправку формы

    // Получаем значение введенной даты
    const targetDateInput = document.getElementById("targetDateInput").value;
    const targetDate = new Date(targetDateInput).getTime();

    // Проверяем, что введенная дата корректна и больше текущей даты
    if (isNaN(targetDate) || targetDate <= new Date().getTime()) {
        alert("Пожалуйста, введите корректную будущую дату.");
        return;
    }

    // Отображаем таймер
    document.getElementById("timer").style.display = "flex";

    // Очищаем предыдущий таймер, если он есть
    clearInterval(timerInterval);

    // Запускаем новый таймер
    timerInterval = setInterval(function () {
        updateTimer(targetDate);
    }, 1000);
});

function updateTimer(targetDate) {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        clearInterval(timerInterval);
        document.querySelector(".timer").innerHTML = "<div>Событие наступило!</div>";
    }
}
