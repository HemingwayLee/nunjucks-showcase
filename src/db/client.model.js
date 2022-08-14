const orm = require("./db.config")

exports.addClient = async (name) => {
  let result = { isSucceeded: true };

  await orm.conn.then(async conn => {
    const repo = await conn.getRepository("Clients");
    await repo.save({
      name: name,
      createdAt: Date.now()
    });
  }).catch(error => {
    result = { isSucceeded: false, msg: error.message }
    console.log(error);
  });

  return result;
}

exports.getClientById = async id => {
  let result = { isSucceeded: true, theClient: null };

  await orm.conn.then(async conn => {
    const repo = await conn.getRepository("Clients");
    result.theClient = await repo.findOne(
      { 
        where: { id: id }
      }
    );
  }).catch(error => {
    result = { isSucceeded: false, msg: error.message }
    console.log(error);
  });

  return result;
}

exports.getAllClients = async () => {
  let result = { isSucceeded: true, clients: [] };
  
  await orm.conn.then(async conn => {
    const repo = await conn.getRepository("Clients");
    result.clients = await repo.find();
  }).catch(error => {
    result = { isSucceeded: false, msg: error.message }
    console.log(error);
  });

  return result;
}

