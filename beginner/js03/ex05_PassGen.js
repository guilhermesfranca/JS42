function passGen(qtd) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let passwd = "";

    for (let i = 0; i < qtd; i++) {
        const indice = Math.floor(Math.random() * chars.length);
        passwd += chars[indice];
    }

    return passwd;
}

console.log(passGen(6));