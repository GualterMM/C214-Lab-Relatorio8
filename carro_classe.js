class Carro{
    constructor (tipo, ano, marca){
        this.tipo = tipo
        this.ano = ano
        this.marca = marca
    }

    getTipo(){
        return this.tipo
    }

    getAno(){
        return this.ano
    }

    getMarca(){
        return this.marca
    }
}

const carro = new Carro('Esporte', 2020, 'Ferrari')
console.log(carro.getMarca(), carro.getTipo(), carro.getAno());