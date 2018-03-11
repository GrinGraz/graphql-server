console.log('SERVER IGNITION!!!...');

const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
let port = 3000;

/* Here a simple schema is constructed using the GraphQL schema language (buildSchema). 
   More information can be found in the GraphQL spec release */

let schema = buildSchema(`
  type Query {
    devTeam: String,
    devInfo: String,
    devSpecialty: String,
    devVertical: String,
    devName: String,
    devAvatar: String,
    devTechLangPlat: String,
    devTechLangPlatLogo: String 
  }
`);

let url_logo_android = 'https://www.android.com/static/2016/img/logo-android-green_1x.png'
let url_logo_ios = "http://es.fifa.wikia.com/wiki/Archivo:IOS_(logo).png"

let christopher = {devSpecialty:'Mobile',devVertical:'Autos',devName:'Christopher Ruz',devAvatar:'url-avatar',devTechLangPlat:'Android',devTechLangPlatLogo:url_logo_android};
let gustavo = {devSpecialty: "Mobile", devVertical: "Consumers", devName: "Gustavo Pedreros", devAvatar: "url-avatar", devTechLangPlat: "Android", devTechLangPlatLogo: url_logo_android};
let carlos = {devSpecialty: "Mobile", devVertical: "Princesos", devName: "Carlos Ramirez", devAvatar: "url-avatar", devTechLangPlat: "Android", devTechLangPlatLogo: url_logo_android};
let nacho = {devSpecialty: "Mobile", devVertical: "Consumers", devName: "Ignacio Gomez", devAvatar: "url-avatar", devTechLangPlat: "iOS", devTechLangPlatLogo: url_logo_ios};
let bastian = {devSpecialty: "Mobile", devVertical: "Autos", devName: "Batian Veliz", devAvatar: "url-avatar", devTechLangPlat: "iOS", devTechLangPlatLogo: url_logo_ios};
let miguel = {devSpecialty: "Mobile", devVertical: "AutoPrincesoss", devName: "Miguel Zapata", devAvatar: "url-avatar", devTechLangPlat: "iOS", devTechLangPlatLogo: url_logo_ios};

let lista = [nacho, gustavo, bastian, christopher, carlos, miguel];
// Root provides a resolver function for each API endpoint
let root = {
  devTeam: () =>{
    return JSON.stringify(lista, null, '');
  },
  devSpecialty: () => {
    return christopher.devSpecialty;
  },
  devVertical: () => {
    return christopher.devVertical;
  },
  devTechLangPlat: () => {
    return christopher.devTechLangPlat;
  }
};

const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
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