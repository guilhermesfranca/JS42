function convert(temp, base) {
    let tempConvert;
    if(base.toLowerCase() === "c"){
        tempConvert = (temp * (9/5)) + 32;
        return `${temp.toFixed(1)}º Celsius convertido para Fahreinheit é igual à ${tempConvert.toFixed(1)}º`

    }
        else if(base.toLowerCase() === "f") {
        tempConvert = (temp - 32) * (5/9);
        return `${temp.toFixed(1)}º Fahreinheit convertido para Celsius é igual à ${tempConvert.toFixed(1)}º`
    }

    }

console.log(convert(26,"c"));

