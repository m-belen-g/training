const {frutas, dinero} = require ('./frutas');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hola mundooo",
    e : "o0",
    T : "U "
}));

frutas.forEach((fruta) => {
    console.log(fruta)
});

console.log(dinero);
