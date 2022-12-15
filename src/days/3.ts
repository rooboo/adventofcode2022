import getInput from '../getInput';

export default async function solveDay3() {
  const lines = await getInput(3);

  lines.forEach((line) => {
    const lineLength = line.length;
    const left = line.substring(0, lineLength / 2);
    const right = line.substring(lineLength / 2, lineLength);

    console.log(line, left, right);
  });
}
