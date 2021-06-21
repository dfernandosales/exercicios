export class Eleicao {
	//atributos da classe Votos
	votosTotal: number;
	votosValidos: number;
	votosBrancos: number;
	votosNulos: number;

	//construtor da classe Votos
	constructor(votosTotal: number, votosValidos: number, votosBrancos: number, votosNulos: number) {
		this.votosTotal = votosTotal;
		this.votosValidos = votosValidos;
		this.votosBrancos = votosBrancos;
		this.votosNulos = votosNulos;
	}

	//métodos da classe Votos
	calculaPercentualVotosValidos(): string {
		let percentual = (100 * this.votosValidos) / this.votosTotal;
		return `O percentual de votos válidos é: ${percentual}%`;
	}

	calculaPercentualVotosBrancos(): string {
		let percentual = (100 * this.votosBrancos) / this.votosTotal;
		return `O percentual de votos brancos é: ${percentual}%`;
	}

	calculaPercentualVotosNulos(): string {
		let percentual = (100 * this.votosNulos) / this.votosTotal;
		return `O percentual de votos nulos é: ${percentual}%`;
	}
}