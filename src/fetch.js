const axios = require("axios");

async function getTrendingCoins() {
  const url =
    "https://api.coingecko.com/api/v3/search/trending";

  const response = await axios.get(url);

  return response.data.coins;
}

module.exports = {
  getTrendingCoins
};