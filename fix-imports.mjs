/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Adiciona .js nos imports relativos
  content = content.replace(/from\s+(['"])(\.\/.*?|..\/.*?)(['"])/g, (match, quote1, importPath, quote2) => {
    if (!importPath.endsWith('.js') && !importPath.endsWith('.json')) {
      return `from ${quote1}${importPath}.js${quote2}`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverseDir(fullPath);
    } else if (file.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

traverseDir(distDir);
console.log('Imports corrigidos com .js!');
