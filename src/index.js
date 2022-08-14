require('dotenv').config({path: `${__dirname}/.env`});

const express = require('express')
const bodyParser = require('body-parser')
const dbRoutes = require('./db/routes.config')
const pageRoutes = require('./page/routes.config')
const orm = require('./db/db.config')
const config = require('./config')

async function initData(conn) {
  const address = config.getAddressFromJson();
  await conn.then(async conn => {
    const repo = await conn.getRepository("Addresses");
    await repo.clear();
    await repo.save(address);
  }).catch(error => {
    console.log(error);
  });

  const clients = config.getClientFromJson();
  await conn.then(async conn => {
    const repo = await conn.getRepository("Clients");
    await repo.clear();
    await repo.save(clients);
  }).catch(error => {
    console.log(error);
  });
}

function addRoutes(app) {
  pageRoutes.routesConfig(app);
  dbRoutes.routesConfig(app);
}

function runExpress() {
  const app = express();

  initData(orm.conn);

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  addRoutes(app);

  app.listen(3000);
}

(async () => {
  console.log(`The project ID is ${process.env.PROJECT_ID}`)

  runExpress();

  console.log(`The project has been started`)
})();
