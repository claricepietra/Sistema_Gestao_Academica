
import { PessoaBase } from "./PessoaBase.js";
import { StatusMatriculaEnum } from "./Dominio.js";
 
export class Aluno extends PessoaBase {
    #idade;
    constructor(idade, nome, status, cpf, email) {
        super(nome, cpf, email);
        this.idade = idade;
        this.status = status || StatusMatriculaEnum.ATIVA;
    }
    get idade() { return this.#idade; }
    set idade(idadeAluno) {
        if (typeof idadeAluno !== "number" || isNaN(idadeAluno) || idadeAluno < 14 || idadeAluno > 120) {
            throw new Error("ERR_IDADE_MINIMA");
        }
        this.#idade = idadeAluno;
    }
}
 
