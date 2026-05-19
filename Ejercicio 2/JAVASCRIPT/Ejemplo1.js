function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}

function combinacion(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function calcular() {
    let resultado = combinacion(59, 5) * combinacion(35, 1);
    document.getElementById("resultado").innerText =
        "Total de combinaciones: " + resultado;
}