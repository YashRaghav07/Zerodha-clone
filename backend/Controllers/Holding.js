const { HoldingsModel } = require("../models/HoldingsModel");

module.exports.showHolding = async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};
