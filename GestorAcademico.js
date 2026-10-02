import { Aluno } from "./Aluno.js";
import { Professor } from "./Professor.js";

export class GestorAcademico {
    cadastrarAluno(idade, nome, statusMatricula, cpf, email) {
        try{
            console.log(`\n[BIBLIOTECA ONLINE] iniciando comunicação com o sistema. . .`);

            const aluno = new Aluno(idade, nome, statusMatricula, cpf, email);
            console.log(`\n[ALUNO CADASTRADO.] ${aluno.nome}`);
            return aluno;
    }
        catch(error){
            console.log(`[ERRO INTERCEPTADO] A operação não pôde ser concluída.`);
            this.traduzirCodigoDeErro(error.message);
        }
    }

    cadastrarprofessor(nome, cpf, email, salario, titulacao) {
        try {
            const professor = new Professor(nome, cpf, email, salario, titulacao);
            console.log(`\n[PROFESSOR CADASTRADO.] ${professor.nome}`);
            return professor;

        } catch(error){
              console.log(`[ERRO INTERCEPTADO] A operação não pôde ser concluída.`);
              this.traduzirCodigoDeErro(error.message);

        } finally {
                console.log("🔒 Operação de finalizada.");
        }
    }
    traduzirCodigoDeErro(error) {
        switch (error) {
            case "ERR_CLASSE_ABSTRATA": 
            console.log("AVISO: Não é possível cadastrar uma Pessoa genérica no sistema.");
            break;

            case "ERR_NOME_VAZIO": 
            console.log("AVISO: O campo de nome é obrigatório e não pode ficar em branco.");
            break;

            case "ERR_CPF_INVALIDO":
                console.log("AVISO: O CPF informado é inválido. Digite exatamente 11 números sem formatação.");
            break;

            case "ERR_EMAIL_INVALIDO":
                console.log("AVISO: O endereço de e-mail deve conter um formato válido (ex: nome@dominio.com).")
            break;


            case "ERR_IDADE_MINIMA":
                console.log("AVISO: O aluno deve ter no mínimo 14 anos para efetuar a matrícula no SENAI.");
            break;

            case "ERR_SALARIO_BASE":
                console.log("AVISO: O salário registrado não pode ser inferior ao piso da categoria (R$ 1500,00).");
            break;

            default:
                console.log("AVISO SISTÊMICO: Falha no processamento dos dados. Tente novamente.");
            
        }
    }

}
