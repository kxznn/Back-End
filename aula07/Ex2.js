class Usuario {
    constructor() {
        this.nome;
        this.login;
        this.senha;
        this.cpf;
        this.celular;
    }

    exibir_info() {
        console.log(`Nome do usuário: ${this.nome}`);
        console.log(`Login: ${this.login}`);
        console.log(`Senha: ${this.senha}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Celular: ${this.celular}`);
    }

    verificar_login(user, senha) {
        if (user === this.login && senha === this.senha) {
            console.log(`Login correto ! Bem vindo ${user}`);
        }
        else {
            console.log(`Login incorreto ! Tente novamente !`);
        }
    }
}

Usuario1 = new Usuario();
Usuario1.nome = 'Kauã Aguiar';
Usuario1.login = 'kauaADS';
Usuario1.senha = '1234';
Usuario1.cpf = '123.456.789-00';
Usuario1.celular = '(11) 91234-5678';
Usuario1.exibir_info();
Usuario1.verificar_login('kauaADS', '1234');
