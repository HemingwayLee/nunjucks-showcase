const addressModel = require("./address.model")
const clientModel = require("./client.model")

exports.getAllAddress = async (req, res) => {
  const result = await addressModel.getAllAddress();
  if (result.isSucceeded) {
    res.status(200).send(result);
  } else {
    res.status(500).send(result);
  }
}

exports.addClient = async (req, res) => {
  const { title, code } = req.body;
  const result = await clientModel.addClient(title, code);
  if (result.isSucceeded) {
    res.status(200).send(result);
  } else {
    res.status(500).send(result);
  }
}

exports.getAllClients = async (req, res) => {
  const result = await clientModel.getAllClients();
  if (result.isSucceeded) {
    res.status(200).send(result);
  } else {
    res.status(500).send(result);
  }
}


