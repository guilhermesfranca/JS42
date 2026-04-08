function toHumanLang(x) {   
    return `O valor passado como parametro é ${valorFormatado} e a variável é do tipo ${typeof(x)}`
}


console.log(toHumanLang("Teste"))
console.log(toHumanLang("42"))
console.log(toHumanLang(42))
console.log(toHumanLang(true))