import fs from 'fs';

export default function getInput(day: number): string[] {
  const file = `res/${day}.input.txt`;
  const datas: string = fs.readFileSync(file, 'utf-8');
  return datas.split(/\r?\n/);
}
