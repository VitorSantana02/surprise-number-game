const welcomeMessage = "Bem vindo ao Jogo do Número Surpresa";
alert(welcomeMessage);

let maximumNumber = 100
let surpriseNumber = parseInt(Math.random() * maximumNumber + 1);
let numberTest;
let attempts = 1;

console.log(surpriseNumber);

while(numberTest != surpriseNumber) {
    numberTest=prompt(`Escolha um número entre 1 e ${maximumNumber}`);
    if (numberTest == surpriseNumber) {
        break;
    } else{
        if (numberTest>surpriseNumber) {
            alert(`Tente novamente! o número secreto é menor que ${numberTest}`);
        } else{
            alert(`Tente novamente! o número secreto é maior que ${numberTest}`);
        }
    attempts++;
    }
};
const attemptsWord = attempts > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! você descobriu o número secreto após ${attempts} ${attemptsWord}, ele é ${surpriseNumber}!`);