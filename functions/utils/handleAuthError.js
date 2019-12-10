const { invalidTokenError } = require("../errors");

module.exports = res => {
  return res.status(403).json({ errors: [invalidTokenError] });
};
