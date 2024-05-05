// pregunta 1
const presentacion = (nombre, apellido, edad) => {
  return `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
};

const mensaje = presentacion("Ronald", "Quispe", 27);

console.log(mensaje);

//pregunta 2
const sumOfCubes = (...numbers) => {
  return numbers.reduce((total, num) => total + Math.pow(num, 3), 0);
};

const resultado = sumOfCubes(1, 5, 9);

console.log(resultado);

//pregunta 3

const obtenerTipo = (valor) => {
  return typeof valor;
};

console.log(obtenerTipo(42));
console.log(obtenerTipo("Hola"));
console.log(obtenerTipo(true));
console.log(obtenerTipo({ nombre: "Juan" }));
console.log(obtenerTipo([1, 2, 3]));
console.log(obtenerTipo(function () {}));
console.log(obtenerTipo(undefined));
console.log(obtenerTipo(null));

// pregunta 4
const sumar = (...numeros) => {
  return numeros.reduce((total, num) => total + num, 0);
};

console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(10, 20, 30));
console.log(sumar(7));
console.log(sumar());

// pregunta 5
const filtrarStrings = (valores) => {
  return valores.filter((valor) => typeof valor === "string");
};

const array1 = [
  1,
  "Hola",
  3.14,
  "Mundo",
  true,
  "JavaScript",
  { clave: "valor" },
  ["array"],
];
const resultado1 = filtrarStrings(array1);

console.log(resultado1);

const array2 = [42, true, null, undefined, "Solo una cadena", false];
const resultado2 = filtrarStrings(array2);

console.log(resultado2);

// pregunta 6
const minMax = (numeros) => {
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);
  return [min, max];
};

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([10, -2, 3, 99, 7]));
console.log(minMax([42]));
console.log(minMax([]));

// pregunta 7
const formatPhoneNumber = (numeros) => {
  if (numeros.length !== 10) {
    throw new Error("La matriz debe contener exactamente 10 enteros.");
  }

  const numeroStr = numeros.join("");

  const parte1 = numeroStr.slice(0, 3);
  const parte2 = numeroStr.slice(3, 6);
  const parte3 = numeroStr.slice(6, 10);

  return `(${parte1}) ${parte2}-${parte3}`;
};
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// pregunta 8
const findLargestNums = (matrices) => {
  return matrices.map((submatriz) => Math.max(...submatriz));
};

const matriz = [
  [4, 2, 7, 1],
  [20, 70, 40, 90],
  [1, 2, 0],
];

const resultadox = findLargestNums(matriz);

console.log(resultadox);

// pregunta 9
const charIndex = (palabra, caracter) => {
  const primerIndice = palabra.indexOf(caracter);

  const ultimoIndice = palabra.lastIndexOf(caracter);

  if (primerIndice === -1) {
    return [-1, -1];
  }

  return [primerIndice, ultimoIndice];
};

console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));
console.log(charIndex("hello", "x"));
