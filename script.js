const fetch = require('node-fetch'); // Používáme require místo importu pro verzi 2.x

async function fetchGoogleResults(keyword) {
  const apiKey = "AIzaSyCoPyPW2o666Wrf8KBTicykGeoYGbg1T2M"; // Nahraďte skutečným API klíčem
  const cx = "b5a7c068647b94f28"; // Nahraďte skutečným CX kódem
  const url = `https://www.googleapis.com/customsearch/v1?q=${keyword}&key=${apiKey}&cx=${cx}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items;
}

async function downloadJson(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

module.exports = { fetchGoogleResults, downloadJson }; // Export funkce
