
import { PessoaBase } from "./PessoaBase.js";
import { TitulacaoEnum } from "./Dominio.js";
 
export class Professor extends PessoaBase {
    #salario;
    constructor(nome, cpf, email, salario, titulacao) {
        super(nome, cpf, email);
        this.salario = salario;
        this.titulacao = TitulacaoEnum;
    }
    get salario() { return this.#salario; }
    set salario(salarioBase) {
        if (typeof salarioBase !== "number" || isNaN(salarioBase) || salarioBase < 1500) {
            throw new Error("ERR_SALARIO_BASE");
        }
        this.#salario = salarioBase;
    }
}
 
