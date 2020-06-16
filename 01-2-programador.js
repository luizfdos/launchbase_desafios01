const programador = {
    nome: "Fernando",
    idade: "26",
    tecnologias: [
        {
            nome: 'JavaScript', 
            especialidade: 'Web/Mobile' 
        },
        {
            nome: "Python",
            especialidade: 'Data Science'
        },
        {
            nome: "C++",
            especialidade: 'Desktop'
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`) 