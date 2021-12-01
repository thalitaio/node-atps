// Crie um arquivo js e nele inclua as variáveis nome e idade. Atribua valores para as variáveis. Crie uma lógica para validar se a pessoa é maior de idade e imprima uma mensagem de acordo com cada situação.

var nome = "Luma";
var idade = 58;

if (idade > 18 || idade == 18) {
    console.log("Isso aí, " + nome + "! Você já pode beber no Brasil.");
} else {
    console.log("Que pena," + nome + ". Você não pode beber.");
}