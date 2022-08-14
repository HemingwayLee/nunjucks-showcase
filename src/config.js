const fs = require('fs');

exports.getAddressFromJson = () => {
  const dirname = "./src/";
  const data = JSON.parse(fs.readFileSync(dirname + "address.json"));
  
  let ret = [];
  
  data.forEach(function(ele, _) {
    ret.push({ 
      address: ele.address,
      zipcode: ele.zipcode,
      createdAt: Date.now()
    });
  });

  return ret;
}

exports.getClientFromJson = () => {
  const dirname = "./src/";
  const data = JSON.parse(fs.readFileSync(dirname + "clients.json"));
  
  let ret = [];
  
  data.forEach(function(ele, _) {
    ret.push({ 
      name: ele.name,
      createdAt: Date.now()
    });
  });

  return ret;
}
