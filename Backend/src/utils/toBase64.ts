import * as fs from 'fs';

export default (file: string) => {
  const bitmap = fs.readFileSync(file);
  return Buffer.from(bitmap).toString('base64');
};
