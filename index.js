import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { GestorAcademico } from './GestorAcademico.js';

const rl = readline.createInterface({ input, output });
const gestor = new GestorAcademico();

async function iniciarSistema() {
    console.log("=== SISTEMA DE GESTÃO ACADÊMICA ===");

    const cadastros = [];   
    let opcao;

    do {
        console.log("\nSelecione uma opção:");
        console.log("1 - Cadastrar aluno");
        console.log("2 - Cadastrar professor");
        console.log("3 - Pesquisar aluno/professor");
        console.log("4 - Sair");

        opcao = await rl.question("Digite a opção desejada: ");

        let cadastro;   

        switch (opcao) {
            case "1": {
                const nome = await rl.question("Digite o nome: ");
                const cpf = await rl.question("Digite o CPF: ");
                const email = await rl.question("Digite o e-mail: ");
                const idade = parseFloat(await rl.question("Digite a idade do aluno: "));
                const statusMatricula = await rl.question("Digite o status da matrícula do aluno: ");
                cadastro = gestor.cadastrarAluno(idade, nome, statusMatricula, cpf, email);
                if (cadastro) cadastros.push(cadastro);
                break;
            }
            case "2": {
                const nome = await rl.question("Digite o nome: ");
                const cpf = await rl.question("Digite o CPF: ");
                const email = await rl.question("Digite o e-mail: ");
                const salario = parseFloat(await rl.question("Digite o salário do professor: "));
                const titulacao = await rl.question("Digite a titulação do professor: ");
                cadastro = gestor.cadastrarprofessor(nome, cpf, email, salario, titulacao);
                if (cadastro) cadastros.push(cadastro);
                break;
            }
            case "3": {
                const pesquisa = (await rl.question("Digite o CPF do aluno ou professor: ")).trim();
                const pessoa = cadastros.find(p => String(p.cpf) === pesquisa);
                if (!pessoa) {
                    console.log(`\n[ERRO]: Nenhum aluno/professor encontrado com o CPF "${pesquisa}".`);
                    break;
                }
                console.log("\n=== RESULTADO DA PESQUISA ===");
                console.log(`NOME: ${pessoa.nome}`);
                console.log(`EMAIL: ${pessoa.email}`);
                console.log(`CPF: ${pessoa.cpf}`);
                break;
            }
            case "4":
                console.log("Encerrando o sistema. Até logo!");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }

        if (opcao === "1" || opcao === "2") {
            if (!cadastro) {
                console.log("\n[ERRO]: Os dados não passaram na validação de segurança.");
                console.log("O cadastro não pode ser finalizado com dados inválidos.");
            } else {
                console.log("\n=== INFORMAÇÕES DO CADASTRO ===");
                console.log(`NOME: ${cadastro.nome}`);
                console.log(`EMAIL: ${cadastro.email}`);
                console.log(`CPF: ${cadastro.cpf}`);
            }
        }

    } while (opcao !== "4");

    rl.close();
}

iniciarSistema();