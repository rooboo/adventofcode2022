import getInput from '../getInput';

export default async function solveDay3() {
  const lines = await getInput(3);

  let sumQ1 = 0;
  let sumQ2 = 0;

  let group: string[] = [];
  lines.forEach((line) => {
    const lineLength = line.length;
    const left = line.substring(0, lineLength / 2);
    const right = line.substring(lineLength / 2, lineLength);

    sumQ1 += getMatchingCharPrio(left, right);

    group.push(line);
    if (group.length === 3) {
      sumQ2 += getMatchingCharPrio(group[0], group[1], group[2]);
      group = [];
    }
  });
  console.log('Q1: Sum of priorities', sumQ1);
  console.log('Q2: Sum of priorities', sumQ2);

  function getMatchingCharPrio(first: string, second: string, third?: string): number {
    for (let i = 0; i < first.length; i++) {
      const char = first.charAt(i);
      if (second.includes(char)) {
        if (third !== undefined && third.length > 0) {
          if (third.includes(char)) {
            return getPrio(char);
          }
        } else {
          return getPrio(char);
        }
      }
    }
    return 0;
  }
  function getPrio(char: string) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 97) {
      return charCode - 96; // a-z = 97-122 = -96
    } else {
      return charCode - 38; // A-Z = 65-90  = -64+26=-38
    }
  }
}
