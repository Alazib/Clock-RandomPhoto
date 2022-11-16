const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Crear una función que reciba como parámetro un array de números y devuelva otro
// array con los valores iniciales multiplicados por 2.

function multiplyByTwo() {
  const numbersMultiplied = numbers.map((number) => number * 2)

  return numbersMultiplied
}

// Crear una función que reciba como parámetro un array de números y devuelva otro
// array solo con los valores iniciales que sean mayores de un número pasado como
// argumento a la función.

function greaterThanFive(upTo = 5) {
  const numbersGreaterThanFive = numbers.filter((number) => number > upTo)

  return numbersGreaterThanFive
}

// Crear una función que reciba como parámetro un array de números y devuelva la
// suma de todos sus valores.

function sumNumbers() {
  const sumOfNumbers = numbers.reduce(
    (prevValue, currentValue) => prevValue + currentValue
  )
  return sumOfNumbers
}
