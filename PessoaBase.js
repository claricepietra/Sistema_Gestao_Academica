
import { ValidadorUtil } from "./ValidadorUtil.js";

 
export class PessoaBase {
    #nome;
    #cpf;
    #email;
 
    constructor(nome, cpf, email) {
        if (new.target === PessoaBase) {
            throw new Error("ERR_CLASSE_ABSTRATA");
        }
        this.validarNome(nome);
        this.validarcpf(cpf);
        this.validaremail(email);
    
    }
 
    get nome() { return this.#nome; }
    validarNome(nome) {
        if (!nome || nome.trim() === '') {
            throw new Error("ERR_NOME_VAZIO");
        }
        this.#nome = nome.trim();
    }
 
    get cpf() { return this.#cpf; }
  
    validarcpf(numeroCpf) {
        if(typeof numeroCpf !== "string" || !ValidadorUtil.validarcpf(numeroCpf)) {
            throw new Error("ERR_CPF_INVALIDO");
        }
        this.#cpf = numeroCpf;
    }
 
    get email() { return this.#email; }
    validaremail(email) {
        if(typeof email !== "string" || !ValidadorUtil.validaremail(email)) {
            throw new Error("ERR_EMAIL_INVALIDO");
        }
        this.#email = email;
    }
}
 
