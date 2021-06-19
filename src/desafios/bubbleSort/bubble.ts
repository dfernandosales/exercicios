
const swap = (arr: Array<number>, xp: number, yp: number) => {
	let auxiliar = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = auxiliar;
}

export const bubbleSort = (array: Array<number>): Array<number> => {
	const tamVetor = array.length;
	let ultimoTroca: number = tamVetor - 1;
	for (let i = 0; i < tamVetor - 1; i++) {
		let ordenado: boolean = true;
		let trocaAtual = -1;
		for (let j = 0; j < ultimoTroca; j++) {
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1);
				ordenado = false;
				trocaAtual = j;
			}
		}
		if (ordenado) {
			break;
		} else {
			ultimoTroca = trocaAtual;
		}
	}
	return array;
}

