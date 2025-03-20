// Importuji funkci z 'script.js'
const { fetchGoogleResults } = require('./script.js');

// Test funkce fetchGoogleResults
test('test funkce fetchGoogleResults', () => {
  // Klíčové slovo pro vyhledávání
  const keyword = 'JavaScript';

  // Funkce by měla vrátit správné výsledky
  const result = fetchGoogleResults(keyword);

  // Ověření, že výsledek je správný
  expect(result).toBe('Results for JavaScript');
});
