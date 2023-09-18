require('dotenv').config()
var xml2js = require('xml2js');

export async function GET(Request) {
  const res = await fetch(`https://tsdrapi.uspto.gov/ts/cd/casedocs/bundle.xml?sn=97446771`, {
    headers: {
      'Content-Type': 'application/xml',
      'USPTO-API-KEY': process.env.KEY,
    }
  });

  const xml = await res.text();
  var parser = new xml2js.Parser();

  parser.parseStringPromise(xml)
    .then(function (result) {
      console.dir(JSON.stringify(result));
    })
    .catch(function (err) {
      console.log('Error in app/api/trademarks GET: ', err);
    });

  return xml;
}