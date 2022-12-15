import getInput from './getInput';

export default async function solveDay2() {
  let scoreQ1 = 0;
  let scoreQ2 = 0;
  const lines = await getInput(2);

  type Shape = 'ROCK' | 'PAPER' | 'SCISSORS';
  type Game = {
    p: Shape;
    o: Shape;
  };

  interface ShapeCombination {
    [key: string]: Shape;
  }

  const shapeValue = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
  };
  const winningShapes: ShapeCombination = {
    ROCK: 'PAPER',
    PAPER: 'SCISSORS',
    SCISSORS: 'ROCK',
  };
  const loosingShapes: ShapeCombination = {
    ROCK: 'SCISSORS',
    PAPER: 'ROCK',
    SCISSORS: 'PAPER',
  };

  function toShape(shape: string): Shape {
    switch (shape) {
      case 'A':
      case 'X':
        return 'ROCK';
      case 'B':
      case 'Y':
        return 'PAPER';
      case 'C':
      case 'Z':
        return 'SCISSORS';
      default:
        throw new Error('Illegal shape value ' + shape);
    }
  }

  function calculateScore1({ o, p }: Game): number {
    if (p === o) {
      return 3 + shapeValue[p];
    } else if (p === 'ROCK' && o === 'SCISSORS') {
      return 6 + shapeValue[p];
    } else if (p === 'PAPER' && o === 'ROCK') {
      return 6 + shapeValue[p];
    } else if (p === 'SCISSORS' && o === 'PAPER') {
      return 6 + shapeValue[p];
    }
    return shapeValue[p];
  }

  function calculateScore2({ o, p }: Game): number {
    if (p === 'ROCK') {
      return shapeValue[loosingShapes[o]]; // loose
    } else if (p === 'PAPER') {
      return 3 + shapeValue[o]; // draw
    } else if (p === 'SCISSORS') {
      return 6 + shapeValue[winningShapes[o]]; // win
    }
    return 0;
  }

  lines.forEach((line) => {
    if (line.length > 0) {
      const gameStr = line.split(' ');
      const game: Game = { p: toShape(gameStr[1]), o: toShape(gameStr[0]) };
      // calculate score for question 1
      scoreQ1 += calculateScore1(game);
      // calculate score for question 2
      scoreQ2 += calculateScore2(game);
    }
  });

  console.log('Solutions for day 2:');
  console.log('Q1: score is', scoreQ1);
  console.log('Q2: score is', scoreQ2);
}
