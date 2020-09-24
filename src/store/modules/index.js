const ModuleFiles = require.context(".", false, /\.js$/);

let modules = {};

const getFileName = file => {
  const suffixIndex = file.lastIndexOf(".");
  return file.substring(2, suffixIndex);
};

ModuleFiles.keys().forEach(file => {
  if (file === "./index.js") return;
  const store = ModuleFiles(file).default;
  const fileName = getFileName(file);
  let obj = {};
  obj[fileName] = store;
  modules = { ...modules, ...obj };
});

export default modules;
