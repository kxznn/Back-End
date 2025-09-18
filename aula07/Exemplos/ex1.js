// Exemplo classe para autenticação

class usuario{
    // cria o construtor
    constructor(){
        this.usuario = null;
        this.senha = null;
    }

    // cria o método chamado autentica
    autentica(){
        const usuario = 'Senai';
        const senha = 'Senai@Mange';
        if(this.usuario == usuario && this.senha == senha){
            console.log('Login Correto');
        }
        else{
            console.log('Login Incorreto, tente novamente' );
        }
    }
};

user = new usuario();
user.usuario = 'Senai';
user.senha = 'Senai@Mange';
user.autentica();