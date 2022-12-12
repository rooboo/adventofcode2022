import * as fs from 'fs';

const elfdataFile = 'res/1.input.txt';
const elfDatas: string = fs.readFileSync(elfdataFile, 'utf-8');
const lines = elfDatas.split(/\r?\n/);

type Elf = {
  position: number;
  calories: number;
};
const elves: Elf[] = [];
let currentElf: Elf | undefined;
let count = 1;
lines.forEach((line) => {
  if (currentElf === undefined) {
    currentElf = { position: count, calories: 0 };
    elves.push(currentElf);
  }
  if (line.length == 0) {
    count++;
    currentElf = undefined;
  } else {
    currentElf.calories = currentElf.calories + parseInt(line);
  }
});

elves.sort((first, second) => first.calories - second.calories);

const q1Elf = elves[elves.length - 1];
if (q1Elf !== undefined) {
  console.log('Q1: Biggest calories: ', q1Elf.calories);
}

console.log(
  'Q2: Sum of calories of TOP 3',
  elves.slice(elves.length - 3).reduce((sum, current) => sum + current.calories, 0),
);
