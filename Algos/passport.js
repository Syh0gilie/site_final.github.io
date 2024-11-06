
const surnameElement = document.querySelector('.surname');
const nameElement = document.querySelector('.name');
const birthElement = document.querySelector('.birth');
    const surname = surnameElement.innerText.trim();
    const name = nameElement.innerText.trim();
    const birth = birthElement.innerText.trim();
    console.log("Фамилия:", surname);
    console.log("Имя:", name);
    console.log("Дата рождения:", birth);
