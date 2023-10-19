function calculateCollision() {
    const mass1 = parseFloat(document.getElementById("mass1").value);
    const velocity1 = parseFloat(document.getElementById("velocity1").value);
    const mass2 = parseFloat(document.getElementById("mass2").value);
    const velocity2 = parseFloat(document.getElementById("velocity2").value);

    // Realize os cálculos aqui para encontrar as velocidades finais após a colisão
    // Por exemplo:
    const u1 = velocity1;
    const u2 = velocity2;
    const v1 = ((mass1 - mass2) / (mass1 + mass2)) * u1 + ((2 * mass2) / (mass1 + mass2)) * u2;
    const v2 = ((2 * mass1) / (mass1 + mass2)) * u1 + ((mass2 - mass1) / (mass1 + mass2)) * u2;

    // Exiba os resultados
    document.getElementById("result").innerHTML = `Velocidade final do Corpo 1: ${v1.toFixed(2)} m/s<br>Velocidade final do Corpo 2: ${v2.toFixed(2)} m/s`;
}
