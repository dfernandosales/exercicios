import { assert } from 'console';

export const fatorial = (num: number): number => {
	assert(num > 0, "Número deve ser um inteiro positivo.");
	assert(Number.isInteger(num), "O número informado deve ser um numero inteiro.")
	return calc_fat(num);
}

const calc_fat = (n: number): number => {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * calc_fat(n - 1);
	}
}