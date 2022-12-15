import getInput from './getInput';

export default async function solveDay1() {
  const lines = await getInput(1);

  type Elf = {
    position: number;
    calories: number;
  };
  const elves: Elf[] = [];
  let count = 1;
  let currentElf: Elf = { position: count, calories: 0 };
  lines.forEach((line) => {
    if (line.length == 0) {
      count++;
      elves.push(currentElf);
      currentElf = { position: count, calories: 0 };
    } else {
      currentElf.calories += parseInt(line);
    }
  });

  elves.sort((first, second) => first.calories - second.calories);

  console.log('Solutions for day 1:');
  const q1Elf = elves[elves.length - 1];
  if (q1Elf !== undefined) {
    console.log('Q1: Biggest calories:', q1Elf.calories);
  }
  console.log(
    'Q2: Sum of calories of TOP 3:',
    elves.slice(elves.length - 3).reduce((sum, current) => sum + current.calories, 0),
  );
}
