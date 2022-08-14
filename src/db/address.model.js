const orm = require("./db.config")

exports.insertAddress = async (address, zipcode) => {
  let result = { isSucceeded: true };

  await orm.conn.then(async conn => {
    const repo = await conn.getRepository("Addresses");
    await repo.save({
      address: address,
      zipcode: zipcode,
      createdAt: Date.now()
    });
  }).catch(error => {
    result = { isSucceeded: false, msg: error.message }
    console.log(error);
  });

  return result;
}

exports.getAllAddress = async () => {
  let result = { isSucceeded: true, addresses: [] };
  
  await orm.conn.then(async conn => {
    const repo = await conn.getRepository("Addresses");
    result.addresses = await repo.find();
  }).catch(error => {
    result = { isSucceeded: false, msg: error.message }
    console.log(error);
  });

  return result;
}

exports.getAccountById = async (id) => {
  let result = { isSucceeded: true, addresses: [] };
  
  await orm.conn.then(async conn => {
    const repo = await conn.getRepository("Addresses");
    result.theAccount = await repo.findOne(
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
