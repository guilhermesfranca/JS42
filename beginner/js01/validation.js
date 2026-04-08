//Dado um nome de usuário e uma senha (hardcoded), valide se o login é correto. Trate usuário errado, senha errada e acesso liberado.



function login(user, passwd) {
    const userCerto = "js42"; // recebe validação externa do servidor por exemplo
    const passwdCerto = "SenhaForte"


    if(user === userCerto && passwd === passwdCerto)
        console.log("Succes: User logado com sucesso");
    else if(user === userCerto && passwd !== passwdCerto)
        console.log("Failed: Senha incorreta");
    else if(user !== userCerto && passwd === passwdCerto)
        console.log("Failed: Usuário incorreto");
    else
        console.log("Failed: Usuário e Senha incorreta");


}

login("js42","SenhaFraca") //senha errada
login("Hs42","SenhaForte") //senha certa user errado
login("js4s2","SnhaFraca") //ambos errados
login("js42","SenhaForte")