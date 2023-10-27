function calculateCollision() {
    const mass1 = parseFloat(document.getElementById("mass1").value); // const mass1 = parseFloat(document.getElementById("mass1").value);: Esta linha obtém o valor do campo de entrada de massa do Corpo 1 (com o id "mass1") da página HTML e converte o valor em um número de ponto flutuante (float).
    const velocity1 = parseFloat(document.getElementById("velocity1").value);
    const mass2 = parseFloat(document.getElementById("mass2").value);  
    const velocity2 = parseFloat(document.getElementById("velocity2").value); //const velocity2 = parseFloat(document.getElementById("velocity2").value);: Da mesma forma, esta linha obtém a velocidade do Corpo 2 do campo de entrada com o id "velocity2" e a converte em um número de ponto flutuante.

    // Realize os cálculos aqui para encontrar as velocidades finais após a colisão
    // Por exemplo:
    const u1 = velocity1; //const u1 = velocity1;: A linha cria uma variável u1 que armazena a velocidade inicial do Corpo 1.
    const u2 = velocity2; //const u2 = velocity2;: Aqui, é criada a variável u2 que armazena a velocidade inicial do Corpo 2.
    const v1 = ((mass1 - mass2) / (mass1 + mass2)) * u1 + ((2 * mass2) / (mass1 + mass2)) * u2; 
    const v2 = ((2 * mass1) / (mass1 + mass2)) * u1 + ((mass2 - mass1) / (mass1 + mass2)) * u2; 

    // Exiba os resultados
    document.getElementById("result").innerHTML = `Velocidade final do Corpo 1: ${v1.toFixed(2)} m/s<br>Velocidade final do Corpo 2: ${v2.toFixed(2)} m/s`;
}
