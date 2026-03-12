let carros_estacionados=0;
const limitemaximo=4;
console.log("---iniciando verificação de vagas---");
for(let vaga=1;vaga<=10; vaga++){
    if(vaga===4 ||vaga===7){
        console.log (`vaga $ {vaga}: [interditada]-pulando...`);
        continue;}
    carros_estacionados++;
    console.log(`vaga $ {vaga}: [livre] ->carro estacionado'(total:${carros_estacionados})`);
    if(carros_estacionados===limitemaximo){
    console.log("---limite atingido! fechando portões por segurança. ---");
    break; }
    }
    console.log("relatório final: operação de entrada encerrada.");