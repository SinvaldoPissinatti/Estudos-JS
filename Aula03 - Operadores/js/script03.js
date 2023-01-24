/*
arquivo js externo
*/

let n1 = 10 // numero inteiro
let n2 = 2 // numero inteiro
let n3 = "2" // string texto

document.write(`N1 ${n1} <br>`);
document.write(`N2 ${n2} <br>`);
document.write(`N3 ${n3} <br>`);

console.log(n1 + n2); //adicao
document.write("console.log(n1 + n2); <br>");
console.log(n1 - n2); //subtracao
document.write("console.log(n1 - n2); <br>");
console.log(n1 * n2); //multiplicacao
document.write("console.log(n1 * n2); <br>");
console.log(n1 / n2); //divisao
document.write("console.log(n1 / n2); <br>");
console.log(n1 % n2); //resto ou modulo
document.write("console.log(n1 % n2); <br>");

console.log(n2 == n3); //igual a
document.write("console.log(n2 == n3); <br>");
console.log(n2 === n3);//identico a
document.write("console.log(n2 === n3); <br>");
console.log(n2 != n3); //diferente de nao=
document.write("console.log(n2 != n3); <br>");
console.log(n2 !== n3);//nao e identico
document.write("console.log(n2 !== n3); <br>");

console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);


let a = true;
let b = false;
console.log(a && b); // E AND
console.log(a || b); // OR OU
console.log(!a); // NOT A
console.log(!b); // NOT B