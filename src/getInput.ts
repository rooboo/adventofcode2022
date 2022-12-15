import fs from 'fs';

/**
 * This function uses the async/await syntax to read the file asynchronously,
 * which means that the function returns a Promise that resolves to the array of lines in the file.
 * This makes the function more efficient, because it does not block the program while the file is being read.
 * It also handles potential errors by catching them and logging a message, and returns an empty array if there is an error.
 * @param day
 */
export default async function getInput(day: number): Promise<string[]> {
  const file = `res/${day}.input.txt`;
  try {
    const data = await fs.promises.readFile(file, 'utf-8');
    return data.split(/\r?\n/);
  } catch (err) {
    console.error(`Failed to read input file for day ${day}: ${err}`);
    return [];
  }
}
