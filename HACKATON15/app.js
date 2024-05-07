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

//pregunta 10
function toArray(obj) {
  return Object.entries(obj);
}

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ key: "value", name: "John" }));

//pregunta 11
function getBudgets(arr) {
  return arr.reduce((total, person) => total + person.budget, 0);
}

const people = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

console.log(getBudgets(people));

//PREGUNTA 12
function getStudentNames(students) {
  return students.map((student) => student.name);
}

const studentArray = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }];

console.log(getStudentNames(studentArray));

//pregunta 13
function objectToArray(obj) {
  return Object.entries(obj);
}

const exampleObject = {
  likes: 2,
  dislikes: 3,
  followers: 10,
};

console.log(objectToArray(exampleObject));

//pregunta 14
function squaresSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

console.log(squaresSum(3));
console.log(squaresSum(4));
console.log(squaresSum(5));

//pregunta 15
function multiplyByLength(arr) {
  const length = arr.length;
  return arr.map((element) => element * length);
}

console.log(multiplyByLength([2, 3, 1, 0]));
console.log(multiplyByLength([1, 2, 3]));
console.log(multiplyByLength([5, 10, 15]));

//pregunta 16
function countdown(n) {
  const result = [];
  for (let i = n; i >= 0; i--) {
    result.push(i);
  }
  return result;
}

console.log(countdown(5));
console.log(countdown(3));
console.log(countdown(0));

//pregunta 17
function diffMaxMin(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(diffMaxMin([1, 2, 3, 4, 5]));
console.log(diffMaxMin([100, 200, 300]));

//pregunta 18
function filterList(arr) {
  return arr.filter(
    (item) => typeof item === "number" && Number.isInteger(item)
  );
}

console.log(filterList([1, 2, 3, "x", "y", 10]));
console.log(filterList([1, "2", 3, "hello", 10]));
console.log(filterList(["a", "b", "c"]));

//pregunta 19
function repeat(element, times) {
  return Array.from({ length: times }, () => element);
}

console.log(repeat(13, 5));
console.log(repeat("a", 3));
console.log(repeat(true, 4));

//pregunta 20
String.prototype.vreplace = function (vowel) {
  return this.replace(/[aeiouAEIOU]/g, vowel);
};

console.log("apples and bananas".vreplace("u"));
console.log("Hello World".vreplace("o"));
console.log("I love programming".vreplace("e"));

//pregunta 21
function findNemo(sentence) {
  const words = sentence.split(" ");
  const index = words.indexOf("Nemo");

  if (index !== -1) {
    return `I found Nemo at ${index + 1}!`;
  } else {
    return "Nemo not found!";
  }
}

console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Where is Nemo?"));
console.log(findNemo("Nemo is hiding"));

//pregunta 22
function capLast(sentence) {
  const words = sentence.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      const lastLetter = word[word.length - 1].toUpperCase();

      return word.slice(0, -1) + lastLetter;
    }
    return word;
  });

  return capitalizedWords.join(" ");
}

console.log(capLast("hello"));
console.log(capLast("hello world"));
console.log(capLast("capitalize the last letter of every word"));
