//live coding

const axios = require("axios");
//Write your functions here

async function getRates(rates){
  const response = await axios.get(`https://api.frankfurter.app/latest?from=${rates}`)
  return response.data.rates
}

//(another way)

async function getRates(rates) {
    const url = `https://api.frankfurter.app/latest?from=${rates}`;
    const response = await axios.get(url);
    return await response.data.rates;
}
