const express = require('express');

const graphqlHTTP = require('express-graphql');
const {makeExecutableSchema} = require('graphql-tools');
const cors = require('cors');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const config = require('../config');

const router = express.Router();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

router.use(cors(), graphqlHTTP({
  schema,
  graphiql: config.NODE_ENV_DEV
}));

module.exports = router;
