const Carro = (tipo, ano, marca) => ({
    tipo,
    ano,
    marca,
    getTipo: () => tipo,
    getAno: () => ano,
    getMarca: () => marca
})

const carro = Carro('Esporte', 2020, 'Ferrari')
console.log(carro.getMarca(), carro.getTipo(), carro.getAno());