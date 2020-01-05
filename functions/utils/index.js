module.exports.prepareNumberToDBsave = function(num) {
  num = typeof val === "string" ? parseFloat(num) : num;
  num = Math.round(num * 10) / 10;

  return num;
};
