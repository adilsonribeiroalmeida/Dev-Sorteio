function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    if (min === "" || max === "") {
        document.querySelector(".result").innerHTML = "Preencha os dois valores!";
        return;
    }

    if (min > max) {
        document.querySelector(".result").innerHTML = "O valor mínimo precisa ser menor que o máximo!";
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector(".result").innerHTML = `Número sorteado: <strong>${result}</strong>`;
}
