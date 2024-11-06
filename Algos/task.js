function checkInequalities() {
    const A = parseFloat(document.getElementById('A').value);
    const B = parseFloat(document.getElementById('B').value);
    const C = parseFloat(document.getElementById('C').value);

    if (A < B && B < C) {
        console.log("Неравенство A < B < C выполняется");
        document.getElementById('result').innerText = "Неравенство A < B < C выполняется.";
    } else if (A < B && B > C) {
        console.log("Неравенство A < B > C выполняется");
        document.getElementById('result').innerText = "Неравенство A < B > C выполняется.";
    } else {
        console.log("Никакие из заданных неравенств не выполняются");
        document.getElementById('result').innerText = "Ни одно из заданных неравенств не выполняется.";
    }
}