const nome = "Joana";
const sexo = "F";
const idade = 60;
const contribuição = 30;

if (sexo == "M" && contribuição >= 35 && idade+contribuição>=95) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
    if (sexo == "F" && contribuição >= 30 && idade+contribuição>=85) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }        
}
