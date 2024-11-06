function changeData() {
    const nameElement = document.querySelector('.name');
    const surnameElement = document.querySelector('.surname');
    const otchestvoElement = document.querySelector('.otchestvo');
    const Name = nameElement.innerText.trim();
    const Surname = surnameElement.innerText.trim();
    const Otchestvo = otchestvoElement.innerText.trim();
    if (Name === "Люк" && Surname === "Скайвокер" && Otchestvo === "Энакенович") {
        const newName = "Luke";
        const newSurname = "Skywalker";
        const newOtchestvo = "Enakovich";
        nameElement.innerText = newName;
        surnameElement.innerText = newSurname;
        otchestvoElement.innerText = newOtchestvo;
    } else {
        const nameLast = 'Люк'
        const surnameLast = 'Скайвокер'
        const otchestvoLast = 'Энакенович'
        nameElement.innerText = nameLast;
        surnameElement.innerText = surnameLast;
        otchestvoElement.innerText = otchestvoLast; 
    }
}