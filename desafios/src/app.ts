import {bubbleSort} from './bubbleSort/bubble';
import {fatorial} from './fatorial/fatorial';

const main = () => {
  let arr = [5,3,2,4,7,1,0,6]
  arr = bubbleSort(arr);
  console.log(arr);
  console.log(fatorial(4));
}

main();