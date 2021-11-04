
let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let escuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, 'undefined', function(){}];
let names = ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];


// Ejercicio 1: Funcion que genera una excusa aleatoria a partir de 3 arrays. Donde:
//  - Primero se limpian los arrays de elementos que no son string.
//  - Segundo se genera un número aleatorio para la aleatoriedad.
//  - Tercero se monta la excusa con los valores aleatorios de los arrays

function excuseRandom(surnames,escuses,names) {
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
function getRandomInt(size)
{
	let randomNumber = Math.random()*(size);
	randomNumber = Math.round(randomNumber);
	return randomNumber;
}

//Identificar si es un elemento string o no y limpiar de elementos que no lo sean el array
function cleanArray(array) {
  
  for (let index in array){
      if (typeof(array[index]) === 'string'){
        
      }
      else {
        array.splice(index,1);
        
      }
  }
return array;
}

 // console.log(excuseRandom(surnames, escuses, names));

// ------------------------------------------------------------------------------------------------------------------------------------------

// Ejercicio 2: Funcion que cuenta el número de repeticiones de letras de cada string de cada array
function CountCharacter(array1, array2, array3) {
  
  // Se limpian de elementos que no son string
  let arrayCh1 = cleanArray(array1);
  let arrayCh2 = cleanArray(array2);
  let arrayCh3 = cleanArray(array3);

  let count = {};
  let count2 = {};
  let count3 = {};
  let result = {
    count,
    count2,
    count3
  };

  count = recursiveCreation(count, arrayCh1);

  count2 = recursiveCreation(count2, arrayCh2);

  count3 = recursiveCreation(count3, arrayCh3);


return result;
}
// Funcion para la creacion recursiva de las propiedades del objeto
function recursiveCreation(objt, array) {

  let count = objt;
  let arrayCh = array;

  for (let i=0; i< arrayCh.length; i++){
 
    for (let j=0; j < arrayCh[i].length; j++){ // se va comprobando la eitencia de esa propiedad, en este caso letra, y si no existe se crea con 1, si si existe se incrementa la cuenta


      if (count[arrayCh[i][j].toLowerCase()]) // Se comprueba si ya existe todo en minuscula siempre
      {
        count[arrayCh[i][j].toLowerCase()] = count[arrayCh[i][j].toLowerCase()] + 1; // Si ya existe se incrementa la cuenta
      }

      else {
        count[arrayCh[i][j].toLowerCase()] = 1; // Si no existe se crea y se incializa a 1
      }
    }
  }


return count;
}


 //console.log(CountCharacter(surnames,escuses,names));

//------------------------------------------------------------------------

// Ejercicio 3: Función que busque en el array y si existe una coincidencia en cada string 

function NoRepeat(array1, array2, array3, SandD) {

// primero limpiamos los arrays y dejamos con strings
  let CleanArray1 = cleanArray(array1);
  let CleanArray2 = cleanArray(array2);
  let CleanArray3 = cleanArray(array3);

// vamos comparando cada string y vemos si tiene repeticiones
// para ello cogemos un string y lo dividimos en caracteres
  let chain1 = division(CleanArray1);
  let chain2 = division(CleanArray2);
  let chain3 = division(CleanArray3);

  //Se ven si se repiten los caracteres en cada string del array y se eliminan repeticiones
  let NoRepeatArray1 = NoRepeatLoop(chain1, SandD);
  let NoRepeatArray2 = NoRepeatLoop(chain2, SandD);
  let NoRepeatArray3 = NoRepeatLoop(chain3, SandD);

  // Se colocan los elementos como estaban originalmente
  let FinalArray1 = changeLikeOriginal(NoRepeatArray1);
  let FinalArray2 = changeLikeOriginal(NoRepeatArray2);
  let FinalArray3 = changeLikeOriginal(NoRepeatArray3);

  let ArrayWithoutReps = [FinalArray1, FinalArray2, FinalArray3];

 //console.log(FinalArray1)
 //console.log(FinalArray2)
 //console.log(FinalArray3)

  return ArrayWithoutReps;
}

// Cogemos un string y lo dividimos en caracteres mediante esta función para poder analizar caracter a caracter
function division(array) {
  
  let cadena=[];
  for (let i in array){
    cadena[i] = array[i].split('');
  
  }

return cadena;
}

// Funcion para el bucle de todas las cadenas del array y su limpieza de repetidos. Llama a searchAndDestroy y limpia de repetidos
function NoRepeatLoop(chain, SandD) {
  
  let NoRepeatCharacter = []; // Creamos el array para completar con no repeticiones
//Ahora dentro de cada cadena del array vemos si se repiten los caracteres:
  let i=0;
  while(i < chain.length) {

     NoRepeatCharacter[i] = SandD(chain[i]); // se limpia de repeticiones para cada cadena del array
    i++;
  }

  return NoRepeatCharacter; // Finalmente se tiene el array limpio conformado por sus cadenas limpias de repeticiones
}

// Función que hace la limpieza bruta de repeticiones de una cadena dada. Se cogen todas las cadenas de una array para limpiarlas una a una 
function searchAndDestroy(chain) {
  
  let noRepeatsSet = new Set(chain);

  let noRepeatsChain = [...noRepeatsSet]; // Se crea la cadena del array sin repeticiones

return noRepeatsChain;
}

// Función que cambia y une todos los caracteres para que quede como originalmente pero sin repeticiones
function changeLikeOriginal(array) {
  
  let LikeOriginal = [""];
  for (let i in array){
    LikeOriginal[i] = array[i].join(''); // Se unen cadena a cadena para conformar el original sin repeticiones

  }
return LikeOriginal;
}

//console.log(NoRepeat(surnames, escuses, names, searchAndDestroy));

// -------------------------------------------------------------------------------

// Ejercicio 4: Funcion que invierta todos los valores de cada string del array


//charAt devuelve la letra dado el indice de la letra sobre la palabra concreta

function turnAround(array) {

  // declarar un string vacio y empezar desde atras hasta adelante de cada string y ir concatenando las letras
  let newString="";
  let newLetter='';
  
  // primero limpiamos el array
  let  arrayFree = cleanArray(array);
  
  //Llamamos al bucle que recorre el array y saca los strings al revés
  newString = arrayLoopTurnAround(arrayFree, newString, newLetter);

  let newArray = newString.split(" ").splice(1,newString.length); // Devolvemos el array conformado por los strings al revés, y quitamos el primer elemento " "

return newArray;
}

// Función auxiliar a TurnAround que permite realizar el bucle de recorrer el array y preparar el string al revés
function arrayLoopTurnAround(array, newString, newLetter) {
  
  let pos=0; // indice para la posicion de la letra
  let index=0; // indice para la posicioin del string

  for (let i=0; i< array.length; i++) { // Recorremos los strings del array
  
    pos=array[i].length-1; // "pos" irá cambiando de valor para ser siempre la posicion de la ultima letra de cada string
  
    index=0; // indice para ir rellenando el array nuevo dado la vuelta

    newString=newString.concat(" ",); // vamos concatenando separando elementos
    
    for (let j=pos; j>=0; j--){ // Recorremos las letras del string a la inversa
      newLetter = array[i].charAt(j); // El primer elemento del nuevo será el último del anterior
      index++;
      newString=newString.concat(newLetter); // Se concatena cada letra con el string final
    }

  }
return newString;
}

// console.log(turnAround(escuses));





