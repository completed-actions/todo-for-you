const express = require('express');
const bodyParser = require('body-parser');

const graphqlRoutes = require('./graphql/routes');
const {server} = require('./config');

const app = express();

app.set('port', server.port);
app.use(bodyParser.json());

app.use('/graphql', graphqlRoutes);
app.use(express.static('dist'));

app.listen(
  app.get('port'),
  () => console.log(`Express app listening on localhost:${app.get('port')}`)
);
