import getInput from './getInput';

export default function solveDay2() {
  let scoreQ1 = 0;
  let scoreQ2 = 0;
  const lines = getInput(2);

  type Shape = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z';
  type Game = {
    p: Shape;
    o: Shape;
  };
  interface ShapeCombination {
    [key: string]: Shape;
  }
  const shapeValue = {
    A: 1,
    X: 1,
    B: 2,
    Y: 2,
    C: 3,
    Z: 3,
  };
  const winningShapes: ShapeCombination = {
    A: 'B',
    X: 'B',
    B: 'C',
    Y: 'C',
    C: 'A',
    Z: 'A',
  };
  const loosingShapes: ShapeCombination = {
    A: 'C',
    X: 'C',
    B: 'A',
    Y: 'A',
    C: 'B',
    Z: 'B',
  };

  lines.forEach((line) => {
    if (line.length > 0) {
      const gameStr = line.split(' ');
      const game: Game = { p: <Shape>gameStr[1], o: <Shape>gameStr[0] };
      // calculate score for question 1
      scoreQ1 += calculateScore1(game);
      // calculate score for question 2
      scoreQ2 += calculateScore2(game);
    }
  });

  console.log('Q1: score is', scoreQ1);
  console.log('Q2: score is', scoreQ2);

  function convertPlayer(shape: Shape): Shape {
    switch (shape) {
      case 'X':
        return 'A';
      case 'Y':
        return 'B';
      case 'Z':
        return 'C';
      default:
        return shape;
    }
  }

  function calculateScore1({ o, p }: Game): number {
    if (convertPlayer(p) === o) {
      return 3 + shapeValue[p];
    } else if (p === 'X' && o === 'C') {
      return 6 + shapeValue[p];
    } else if (p === 'Y' && o === 'A') {
      return 6 + shapeValue[p];
    } else if (p === 'Z' && o === 'B') {
      return 6 + shapeValue[p];
    }
    return shapeValue[p];
  }

  function calculateScore2({ o, p }: Game): number {
    if (p === 'X') {
      return shapeValue[loosingShapes[o]]; // loose
    } else if (p === 'Y') {
      return 3 + shapeValue[o]; // draw
    } else if (p === 'Z') {
      return 6 + shapeValue[winningShapes[o]]; // win
    }
    return 0;
  }
}
