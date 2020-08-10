import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("cliente1", 11122233311);
const conta1 = new ContaCorrente(102, cliente1);

conta1.depositar(500);

const cliente2 = new Cliente("cliente2", 123456789);
const conta2 = new ContaCorrente(102, cliente2);

conta1.transferir(200, conta2)

console.log(conta1);
console.log(conta2);
console.log(ContaCorrente.numeroContas);
