
let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let escuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, 'undefined', function () { }];
let names = ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];

// Ejercicio 1: Funcion que genera una excusa aleatoria a partir de 3 arrays. Donde:
//  - Primero se limpian los arrays de elementos que no son string.
//  - Segundo se genera un número aleatorio para la aleatoriedad.
//  - Tercero se monta la excusa con los valores aleatorios de los arrays

function excuseRandom(surnames, escuses, names) {
  let texto = " ";
  //Primero limpiamos los arrays de elementos que no son String 
  let cleanArray1 = cleanArray(surnames);
  let cleanArray2 = cleanArray(escuses);
  let cleanArray3 = cleanArray(names);

  //Generamos un número aleatorio entero entre 0 y la longitud del array limpio
  let random1 = getRandomInt(cleanArray1.length);
  let random2 = getRandomInt(cleanArray2.length);
  let random3 = getRandomInt(cleanArray3.length);
  // Se monta la excusa con los valores aleatorios de los arrays
  texto = texto.concat(cleanArray1[random1], " ", cleanArray2[random2], " ", cleanArray3[random3]);
  return texto;
}

//Funcion que genera un numero aleatorioEntero entre 0 y size, parametro que se le pasa
function getRandomInt(size) {
  let randomNumber = Math.random() * (size);
  randomNumber = Math.round(randomNumber);
  return randomNumber;
}

//Identificar si es un elemento string o no y limpiar de elementos que no lo sean el array
function cleanArray(array) {

  for (let index in array) {

    if (typeof array[index] !== 'string' && typeof array[index] !== 'number') {
      // elimina el valor del array ya que no cumple los requisitos
      array.splice(index, 1);
      index--; // volvemos a disminir el índice para que no se salte el siguiente
    }

  }
  return array;
}

// console.log(excuseRandom(surnames, escuses, names));

// ------------------------------------------------------------------------------------------------------------------------------------------

// Ejercicio 2: Funcion que cuenta el número de repeticiones de letras de cada string de un array

function countCharacter(array) {

  // Se limpian de elementos que no son string
  let arrayCh = cleanArray(array);

  let obj = {};
  // Recorremos el array y para cada string llamamos a dinamicCreation
  for (let i in arrayCh) {
    dinamicCreation(obj, arrayCh[i]);
  }
  return obj;
}

// // Funcion para la creacion dinámica de las propiedades del objeto
function dinamicCreation(objt, character) {
  // Comparamos todo siempre en minúscula
  character = character.toLowerCase();
  // Recorremos el string con sus letras
  for (let i in character) {
    // letter guarda un caracter
    let letter = character[i];
    // si el objeto ya tiene se le suma 1
    if (objt.hasOwnProperty(letter)) {
      objt[letter] += 1;
    }
    // si no la tiene se crea asignandole 1
    else {
      objt[letter] = 1;
    }
  }

}

//  console.log(countCharacter(surnames));

//------------------------------------------------------------------------

// Ejercicio 3: Función que busque en el array y si existe una coincidencia en cada string 

function noRepeat(array1) {

  // primero limpiamos los arrays y dejamos con strings
  let array = cleanArray(array1);

  let withoutReps = new Set(array);

  const arrayWithoutRep = [...withoutReps];
  console.log(arrayWithoutRep)
  return arrayWithoutRep;
}

// console.log(noRepeat(prueba))

// -------------------------------------------------------------------------------

// Ejercicio 4: Funcion que invierta todos los valores de cada string del array


//charAt devuelve la letra dado el indice de la letra sobre la palabra concreta

function turnAround(array) {

  // declarar un string vacio y empezar desde atras hasta adelante de cada string y ir concatenando las letras
  let newString = "";
  let newLetter = '';

  // primero limpiamos el array
  let arrayFree = cleanArray(array);

  //Llamamos al bucle que recorre el array y saca los strings al revés
  newString = arrayLoopTurnAround(arrayFree, newString, newLetter);

  let newArray = newString.split(" ").splice(1, newString.length); // Devolvemos el array conformado por los strings al revés, y quitamos el primer elemento " "

  return newArray;
}

// Función auxiliar a TurnAround que permite realizar el bucle de recorrer el array y preparar el string al revés
function arrayLoopTurnAround(array, newString, newLetter) {

  let pos = 0; // indice para la posicion de la letra
  let index = 0; // indice para la posicioin del string

  for (let i = 0; i < array.length; i++) { // Recorremos los strings del array

    pos = array[i].length - 1; // "pos" irá cambiando de valor para ser siempre la posicion de la ultima letra de cada string

    index = 0; // indice para ir rellenando el array nuevo dado la vuelta

    newString = newString.concat(" ",); // vamos concatenando separando elementos

    for (let j = pos; j >= 0; j--) { // Recorremos las letras del string a la inversa
      newLetter = array[i].charAt(j); // El primer elemento del nuevo será el último del anterior
      index++;
      newString = newString.concat(newLetter); // Se concatena cada letra con el string final
    }

  }
  return newString;
}

// console.log(turnAround(escuses));





