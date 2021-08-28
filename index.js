const path = require("path");

console.log(process.version);
console.log(process.cwd());

const eslintPath = path.resolve('./node_modules/eslint');
console.log(require(eslintPath));