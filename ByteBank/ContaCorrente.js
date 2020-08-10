import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroContas = 0;
    agencia;
    _cliente;

    set cliente(novoCliente){
        if (novoCliente instanceof(Cliente))
            this._cliente = novoCliente;
    }

    get cliente(){
        return this._cliente;
    }
    
    _saldo = 0; 

    get saldo(){
        return this._saldo;
    }
    
    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroContas +=1;
    }

    sacar(valor){
        if (this._saldo < valor){
            return;            
        }
        this._saldo -= valor;
        return valor;
    }

    depositar(valor){
        if (valor > 0)
            this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}