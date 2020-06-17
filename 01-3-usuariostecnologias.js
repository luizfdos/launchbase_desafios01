const usuarios = [
    { nome: "Luiz", tecnologias: ["HTML", "CSS", "Javascript", "python"]},
    { nome: "Will", tecnologias: ["Delphi", "JavaScript", "Node.js"]},
    { nome: "Henrique", tecnologias: ["PHP", "Delphi", "TypeScript"]},
    { nome: "Leo", tecnologias: ["JavaScript", "TypeScript", "Node.js", "Angular", "React"]}

]
function imprimedados(usuario){
    for (let i = 0; i < usuario.length; i++) {
        console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologias.join(', ')}`)
    }
    }

imprimedados(usuarios)


// solução após descobrir for...of 
//const usuarios = [
//     { nome: "Luiz", tecnologias: ["HTML", "CSS", "Javascript", "python"]},
//     { nome: "Will", tecnologias: ["Delphi", "JavaScript", "Node.js"]},
//     { nome: "Henrique", tecnologias: ["PHP", "Delphi", "TypeScript"]}
// ]
// function imprimedados(usuario){
//     for (let usuario of usuarios) {
//         console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
//     }
//     }

// imprimedados(usuarios)