const { PositionsModel } = require("../models/PositionsModel");

module.exports.showPosition = async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
};
