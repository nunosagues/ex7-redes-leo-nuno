function crypt(msg, hash) {
    // Pega a data em formato de números
    const d = Date.now();
    
    // Transformando a string em um array de letras
    let phrase = msg.split("");

    // Loop para passar em cada um dos itens do array
    for (let i = 0; i < phrase.length; i++) {
        // Transformando cada letra em um decimal de ASCII
        // e multiplicando pela data
        phrase[i] = (phrase[i].charCodeAt(0) * d);

        // Adicionando a hash separadora a cada um dos
        // itens do array (letras)
        phrase[i] += hash;
    }

    // Adicionando a data de criptografia ao ultimo elemento do array
    phrase.push(d);

    // Variável de resposta
    let output = "";
    
    // Loop adicionando os elementos do array como string
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i];
        // output = output + phrase[i]
    }

    // Retorna a mensagem criptografada
    return output;
}

function decrypt(cypher, hash) {
    // Forço a hash a virar uma string
    let h = String(hash)
    // Uso a hash para dividir a string em um array
    const msg = cypher.split(h);

    //Removeu o ultimo item do array e guardou em "d"
    const d = msg.pop();

    // Passando por cada um dos elementos e:
    // - dividindo pela data
    // - transformando de ASCII para caracteres
    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / d);
    }

    // Defininindo um uma saída no formato de string
    let output = "";

    // Loop concatenando a minha mensagem
    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    // Retornando a mensagem descriptografada
    return output;
}

const phrase = "criciuma acima de todos";

let pass = crypt(phrase, "012345678901234567890123456789");

console.log(pass);



let solve = decrypt(pass, "012345678901234567890123456789")

console.log(solve);
