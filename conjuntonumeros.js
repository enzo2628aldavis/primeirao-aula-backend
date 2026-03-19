function calcularMedia(numeros) {// CRIAA FUNCTION E PASSA COMO PARAMETRO VARIAVEL numeros  
    let soma = 0; // ZERA A VARIAVEL
    let totalNumeros = numeros.length; // 3 NUMEROS 10,20,30
    for (let i = 0; i < totalNumeros; i++) { // INICIA VARIÁVEL DO ZERO E PERGUNTA SE É MENOR QUE 3 (numeros.length)
    soma += numeros[i]; // SOMA RECEBE VARIAVEL NUMEROS SOMANDO AS POSIÇÕES [i] SENDO QUE O FOR SÓ VAI ATÉ 3.
    console.log(i);// SÓ PARA MOSTRAR NA TELA AS POSIÇÕES DE i (ou seja do laço FOR)
    console.log(numeros); // SÓ PAR MOSTRAR O QUE ESTÁ ARMAZENANDO
    }
    return soma / totalNumeros;
    }
    console.log(calcularMedia([10, 20, 30])); // Saída: 20