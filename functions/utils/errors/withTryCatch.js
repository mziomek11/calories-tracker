const handleServerError = require("./handleServerError");

module.exports = async (req, res, handler) => {
  try {
    return await handler(req, res);
  } catch (err) {
    return handleServerError(res, err);
  }
};
