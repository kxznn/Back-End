 // exemplo 7 capturando informaçoes digitadas pelo usuario

 readline = require('readline'); 
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });
 let historico=[];

 function perguntar(){
    rl.question('Digite algo ou sair para encerrar:',(resposta)=>{
        if(resposta.toLowerCase()=='sair'){
            console.log('Programa encerrado');
            console.log('Historico de entradas');
            historico.forEach((item,i)=>{
                console.log(`${i+1}: ${item}`);
            });
            rl.close();


        }else{
            historico.push(resposta); 
            console.log(`Você digitou: ${resposta} `);
            perguntar();
        }
    })
 }

 perguntar();