const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// EJERCICIO 1

/*const pizzasImpares = pizzas.filter(pizza=> pizza.id % 2 !== 0);

pizzasImpares.forEach(pizza => {
  console.log(`Pizza con ID impar: ID: ${pizza.id}, NOMBRE: ${pizza.nombre}`)
});*/

// EJERCICIO 2

/*const pizzaMenor800P = pizzas.filter(pizza=>
  pizza.precio< 800);

if (pizzaMenor800P.length>0){
  pizzaMenor800P.forEach(pizza=>{
    console.log(`pizza/s que valen menos de $800: NOMBRE: ${pizza.nombre}, PRECIO: ${pizza.precio}`)
  });

} else{
  console.log("no hay pizzas de menos de $800");
};*/



//EJERCICIO 3


/*const resultPizzas = pizzas.map(pizza => `Nombre de la pizza: ${pizza.nombre}, precio de la pizza: ${pizza.precio}`);

resultPizzas.forEach(resultado => {
  console.log(resultado);
});*/

// EJERCICIO 4

/*pizzas.forEach((pizza) => {
  console.log(`Ingredientes de la pizza ${pizza.nombre}:`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
  });
  console.log("\n"); 
});*/

