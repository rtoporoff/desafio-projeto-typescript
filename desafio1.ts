//resposta 1
let funcionario = { //aqui o ts está inferindo o tipo
    codigo: 10,
    nome: 'Renan'
};

//resposta 2
let funcionario2: {codigo: number, nome: string} = { //aqui especificamos o tipo
    codigo: 10,
    nome: 'Renan'
}

//resposta 3
interface Funcionario {
    codigo: number,
    nome: String
}

let funcionario3: Funcionario = {
    codigo: 200,
    nome: 'Renan',
}
