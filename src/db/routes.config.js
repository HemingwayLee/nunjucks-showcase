const dbController = require('./controller')

exports.routesConfig = function(app) {
  app.get('/db/address/all', [
    dbController.getAllAddress
  ]);

  app.post('/db/address/add', [
    dbController.addAddress
  ]);

  app.get('/db/client/all', [
    dbController.getAllClients
  ]);

  app.post('/db/client/add', [
    dbController.addClient
  ]);
}
