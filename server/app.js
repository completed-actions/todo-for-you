const express = require('express');
const bodyParser = require('body-parser');

const graphqlRoutes = require('./graphql/routes');
const {server} = require('./config');

const app = express();

app.set('port', server.port);
app.use(bodyParser.json());

app.use('/graphql', graphqlRoutes);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.listen(
  app.get('port'),
  () => console.log(`Express app listening on localhost:${app.get('port')}`)
);
