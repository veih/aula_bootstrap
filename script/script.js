class contaBancaria {
    constructor(numero, agencia, tipo) {
        this.numero = numero;
        this.agencia = agencia;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return 'operação negada';
        }
        this._saldo = this._valor - valor;
        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(numero, agencia, cartaoCredito) {
        super(numero, agencia);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(numero, agencia, juros) {
        super(numero, agencia);
        this.tipo = 'poupanca';
        this._juros = juros;
    }
    get juros() {
        return this._juros;
    }
    set juros(valor) {
        this._juros = valor;
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(numero, agencia) {
        super(numero, agencia);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'operação negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    
}