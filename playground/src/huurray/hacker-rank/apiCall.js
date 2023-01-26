const request = require('request');

function myFetch(url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, res, body) {
      if (error) reject(error);
      else resolve(JSON.parse(body));
    });
  });
}

async function getCountryName(code) {
  let page = 1;
  let result = '';

  while (!result) {
    const res = await myFetch(`https://jsonmock.hackerrank.com/api/countries?page=${page}`);
    page++;
    if (res) {
      const countries = res.data;
      if (countries && countries.length > 0) {
        for (let i = 0; i < countries.length; i++) {
          const country = countries[i];
          if (country.alpha2Code === code) {
            result = country.name;
            break;
          }
        }
      }
    }
  }

  return result;
}

getCountryName('AF');
