function calcular() {
    let T0 = parseFloat(document.getElementById("T0").value);
    let Ts = parseFloat(document.getElementById("Ts").value);
    let k = parseFloat(document.getElementById("k").value);
    let t = parseFloat(document.getElementById("t").value);
    let T = Ts + (T0 - Ts) * Math.exp(-k * t);
    T = Math.round(T);
    document.getElementById("resultado").innerText =
        "Temperatura final: " + T + " °F";
}