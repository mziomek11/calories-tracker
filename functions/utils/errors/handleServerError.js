const { serverError } = require("../../errors");

module.exports = (res, err) => {
  console.log(err);
  return res.status(500).json({ errors: [serverError] });
};
