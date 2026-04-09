function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}


function truncateText(str, lim) {
    let trunc = "";
    let i = 0;
    while(i < lim)
    {
        trunc += str[i]
        i++;
    }
    return trunc
}

function genRandomNum(range) {
    return Math.floor(Math.random() * range) + 1;
}

function emailValid(email)
{
    const regex = /.+@.+\..+/;
    return regex.test(email)
}


/**TESTES */
console.log(capitalize("teste"))
console.log(truncateText("test", 3))
console.log(genRandomNum(224));
console.log(emailValid("gui@gmail.com"))
