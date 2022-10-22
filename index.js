// const foo = "hola";

// console.log("not Hola");

// console.log(foo);

// const a = 2;
// console.log(a);

// let a = "hola";

// a = "Nuclio";

// estas dos ultimas lines, significan que en primer lugar
//  la variable A vale "hola" pero mas adelante cambia para valer "NUCLIO"

const numero = 1234;
const booleanos = false / true;
const string = "hola";
const string2 = "hola2";
const string3 = `hola${numero + numero}`;
//               0       1       2       3           4                5
const array = [numero, 3434, "nuclio", true, [string, string2], { foo: "bar" }];

const ster = "hola";
const existe = array.includes(ster); // busca el string "hola" dentro del array y devolvera TRUE o FALSE
const existe2 = array[4].includes("hola"); //busca hola dentro del array 4
const indice = array.indexOf("hola"); // devuelve -1 por que no existe hola en el indice del array
const indice2 = array.indexOf(numero); // muestra 0 que es la posicion de NUMERO

console.log(indice2);
console.log(indice);
console.log(existe2);
console.log(existe);

console.log(array); //muestrea todo el array
console.log(array[2]); // muestra NUCLIO la posicion 2 empezando por el indice 0 hasta el -1 del array en este caso muestrea 'nuclio'
console.log(array[6]); // muestra UNDEFINED y es un tipo de dato que especifica ausencia de dato, la variable existe pero no contiene datos
console.log(array[4]); //muestra todo el array 4
console.log(array[4][0]); // muestra HOLA
console.log(array[4][1]); // muestra HOLA2
console.log(string3); // Muestra hola2468
console.log(array.length); // Muestra 6 la longitud del array

// OBJETOS COMO ESTRUCTURA DE DATOS DE CLAVE VALOR
// Todos los Valores que inserto en el objeto deben tener un nombre previo que se conoce como clave o propiedad, es a la que asignamos el valor

const obj = {
  foo: "nuclio",
  bar: 12,
  patata: false,
  arr: [numero, "nuclio", true],
};

console.log(obj); // muestra el objeto como tal en estructura
console.log(obj.bar); // muestra 12 que es el valor de la propiedad BAR del objeto

const coches = [
  { marca: "Toyota", modelo: "prius", km: 20000, nuevo: false },
  { marca: "Citroen", modelo: "Xsara", km: 30000, nuevo: true },
  { marca: "Skoda", modelo: "Octavia", km: 150000, nuevo: false },
];

console.log(coches); // muestra el ARRAY DE OBJETOS

coches.marca = "SEAT";
coches.modelo = "IBIZA";
coches.km = 2500;
console.log(coches);
