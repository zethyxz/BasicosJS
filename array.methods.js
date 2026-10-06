const lenguajeDeProgramacion =  ["JavaScript", "Python" , "#C" , "ruby",]

//FILTER
nuevoArray = lenguajeDeProgramacion.filtler(
    lenguaje => lenguaje === 'JavaScript'
)

console.log(nuevoArray)
//comprobar si un elemento existe
const resultado = lenguajeDeProgramacion.includes('Ruby')
console.log(resultado)

//some-Devuelve si la menor cumple con la condicion
const numeros = [10, 20,30,40,50,60]
const resultadoNum = numeros.some(numero => numero > 15 )
console.log('resultado', resultadoNum)

//Find- Devuelve si el primer elemento que cumpla con la condicion
const resultadoNum2 = numeros.find(numero => numero > 15 )
console.log('resultado num 2', resultadoNum2)

//Every- Retorna true o false si todos cumplen la condicion
const resultadoNum3 = numeros.every(numero => numero > 15 )
console.log('resultado num 3', resultadoNum3)

//Reduce- Acumulador de algun total
const resultadoNum4 = numeros.reduce((total, numero)=> numero + total, 0)
console.log('resultado num 4', resultadoNum4)

//ForEach - Itera en cada uno de los elementos de un array
const nuevoArray2 = lenguajeDeProgramacion.foreach((total, numero)=> numero + total, 0)
console.log('Nuevo Array 2', nuevoArray2)

//crea un nuevo array a partir de uno original
const arrayMap = lenguajeDeProgramacion.map( lenguaje => lenguaje)
console.log('array map', arrayMap)
