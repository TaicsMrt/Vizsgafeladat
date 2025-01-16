// Tároló az adatokhoz
const users = [];

// Bejelentkezés gomb eseménye
document.getElementById("loginBtn").addEventListener("click", () => {
    const username = prompt("Add meg a felhasználóneved:");
    const password = prompt("Add meg a jelszavad:");

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert(`Üdvözlünk, ${username}!`);
    } else {
        alert("Hibás felhasználónév vagy jelszó!");
    }
});

// Regisztráció gomb eseménye
document.getElementById("registerBtn").addEventListener("click", () => {
    const username = prompt("Válassz egy felhasználónevet:");
    const password = prompt("Válassz egy jelszót:");

    if (username && password) {
        users.push({ username, password });
        alert("Sikeres regisztráció!");
    } else {
        alert("A regisztráció sikertelen! Mindkét mezőt ki kell tölteni.");
    }
});
