let valorTotal = 1522;

if (valorTotal <= 100) {
    let desconto = valorTotal * 0;
    valorTotal = valorTotal - desconto;
    console.log("O Valor final sem desconto aplicado é de ", valorTotal);
}

else if (valorTotal >= 101 && valorTotal <= 300) {
    let desconto = valorTotal * 0.1;
    valorTotal = valorTotal - desconto;
    console.log("O Valor final com desconto aplicado de 10% é de ", valorTotal);
}

else {
    let desconto = valorTotal * 0.15;
    valorTotal = valorTotal - desconto;
    console.log("O Valor final com desconto aplicado de 15% é de ", valorTotal);
}





let usuarioLogado = true;
let idade = 22;
let perfilUsuario = "GERENTE"

const acesso = (usuarioLogado === true && idade >= 18 && (perfilUsuario === "GERENTE" || perfilUsuario === "ADMIN"));

if (acesso === true) {
    console.log("Acesso Garantido!");
}

else {
    console.log("Acesso Negado!");
}

