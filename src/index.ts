import * as functions from './days';

/*
 * In this code, we are defining an interface called Functions that has a string index signature.
 * This allows us to type the functions object as an object with any string keys that have a function type.
 * Then, we use a type assertion to tell TypeScript that the functions object has this type,
 * which allows us to access the solveDay${day} property without generating an error.
 */
interface Functions {
  [key: string]: () => void;
}

(function () {
  const day: string = process.argv[2];
  const func: Functions = functions as Functions;
  func[`solveDay${day}`]();
})();
