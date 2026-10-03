const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// tylko odczyt: studenci nie mogą nic zepsuć
server.use((req, res, next) => {
  if (req.method !== 'GET') return res.sendStatus(405);
  next();
});

server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', () => console.log('API działa na porcie ' + port));
