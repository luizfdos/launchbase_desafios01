const usuarios = [
    { nome: "Luiz", tecnologias: ["HTML", "CSS", "Javascript", "python"]},
    { nome: "Will", tecnologias: ["Delphi", "JavaScript", "Node.js"]},
    { nome: "Henrique", tecnologias: ["PHP", "Delphi", "TypeScript"]},
    { nome: "Leonardo", tecnologias: ["JavaScript", "TypeScript", "Node.js", "Angular", "React"]},
    { nome: "Beatriz", tecnologias: ["CSS","JavaScript", "Node.js", "React"]}

]

function checaSeUsuarioUsaCSS(usuario){
        for (let i = 0; i < usuario.tecnologias.length; i++){
            if (usuario.tecnologias[i] == 'CSS') return true

            }

            return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }
