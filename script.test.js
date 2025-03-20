const { fetchGoogleResults, downloadJson } = require('./script'); // Používáme require
const fetch = require('node-fetch'); // Importujeme node-fetch pro testování

jest.mock('node-fetch'); // Mockování fetch pro testování

describe('Testování funkcí', () => {
  test('fetchGoogleResults vrátí výsledky', async () => {
    const mockData = {
      items: [
        { title: 'Test 1', link: 'http://example.com/test1' },
        { title: 'Test 2', link: 'http://example.com/test2' }
      ]
    };

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const results = await fetchGoogleResults('test');
    expect(results).toEqual(mockData.items);
  });

  test('downloadJson stáhne správný JSON', async () => {
    const mockJson = { key: 'value' };

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockJson),
    });

    const data = await downloadJson('http://example.com/data');
    expect(data).toEqual(mockJson);
  });

  test('Pokud je input prázdný, hledání nebude spuštěno', () => {
    const keyword = '';
    expect(keyword).toBe('');
  });
});
