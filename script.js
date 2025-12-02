function sortear() {
    const min = Number(document.getElementById("min").value);
    const max = Number(document.getElementById("max").value);

    if (min >= max || min === "" || max === "") {
        document.getElementById("resultado").innerText = "Valores inválidos!";
        return;
    }

    const numero = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("resultado").innerText = numero;
}
