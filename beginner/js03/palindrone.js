//Crie uma função que verifica se uma string é um palíndromo (ex: 'radar', 'arara').


function isPalindrome(str1) {
    return str1.toLowerCase() === str1.toLowerCase().split("").reverse().join("")
}


console.log(isPalindrome("ararA"))