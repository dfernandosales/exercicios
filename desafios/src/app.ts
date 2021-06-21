import { bubbleSort } from './bubbleSort/bubble';
import { fatorial } from './fatorial/fatorial';
import { somaMultiplos } from './somaMultiplos/somaMultiplos';
import { Eleicao } from './votos/eleicao';

const main = () => {
  const eleicao = new Eleicao(1000, 800, 150, 50);
  console.log(
    eleicao.calculaPercentualVotosBrancos(),
    eleicao.calculaPercentualVotosNulos(),
    eleicao.calculaPercentualVotosValidos()
  );

  console.log("Fatorial", fatorial(5))
  console.log("SOMA DE MULTIPLOS", somaMultiplos(9))

  let arr = [5, 3, 2, 4, 7, 1, 0, 6]
  console.log("ARRAY ORIGINAL", arr);
  arr = bubbleSort(arr);
  console.log("ARRAY ORDENADO", arr);
}

main();