import getInput from '../getInput';

export default async function solveDay4() {
  const lines = await getInput(4);

  let sumQ1 = 0;
  let sumQ2 = 0;
  lines.forEach((line) => {
    const pairs = line
      .split(',')
      .map((pair) => pair.split('-').map((value) => Number(value)));
    const [left, right] = pairs;

    if (left[0] >= right[0] && left[1] <= right[1]) {
      sumQ1++;
      sumQ2++;
    } else if (right[0] >= left[0] && right[1] <= left[1]) {
      sumQ1++;
      sumQ2++;
    } else if (Math.max(left[0], right[0]) <= Math.min(left[1], right[1])) {
      sumQ2++;
    }
  });

  console.log('Q1: Sum of full containments', sumQ1);
  console.log('Q1: Sum of overlapping containments', sumQ2);
}
