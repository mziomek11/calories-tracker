module.exports = {
  serverError: require("./server"),
  emailInUseError: require("./emailInUse"),
  wrongCredentialsError: require("./wrongCredentials"),
  invalidTokenError: require("./invalidToken"),
  categoryExistsError: require("./categoryExists"),
  foodExistsError: require("./foodExists")
};
