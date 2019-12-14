const { withTryCatch } = require("../errors");

const deleteDoc = async ({ doc }, res) => {
  await doc.ref.delete();
  return res.status(200).json({ msg: "Success" });
};

module.exports = async (req, res) => withTryCatch(req, res, deleteDoc);
