console.log('SERVER IGNITION!!!...');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema2.js')
let port = 3000;

// Root provides a resolver function for each API endpoint
const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true //Set to false if you don't want graphiql enabled
}));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startServer() {
  console.log(formatDate(new Date()) + ' - GraphQL API server running at localhost:'+ port);
  await sleep(10000);
  startServer()
}

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + date.toLocaleTimeString();
}

app.listen(port)

startServer()