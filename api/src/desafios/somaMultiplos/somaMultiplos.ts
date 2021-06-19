import { assert } from "console";


export const somaMultiplos = (num:number): number => {
	assert(num > 0, "Número deve ser um inteiro positivo.");
	assert(Number.isInteger(num), "O número informado deve ser um numero inteiro.");
	let soma = 0;
	for (let i = 0; i <= num; i++) {
		if(i%3 === 0 || i%5 === 0){
			soma += i ;
		}
	}
	return soma;
}

