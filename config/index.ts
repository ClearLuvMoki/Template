import * as fs from 'fs-extra';
import * as yaml from 'js-yaml';
import * as path from 'path';

export function getConfig() {
  const filePath = path.join(process.cwd(), './config/./config.yaml');

  if (!fs.existsSync(filePath)) {
    throw new Error(`Can not find config file: ${filePath}`);
  }

  return yaml.load(fs.readFileSync(filePath, 'utf8')) as Record<
    string,
    unknown
  >;
}
