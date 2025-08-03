const fetch = require('node-fetch');

const BASE_URL = 'https://facebook.com/api/'
const APP_TOKEN = "098980a6bc67abb210987"

// Function to fetch scan results from Semgrep API
async function getSemgrepScanResults(apiUrl, apiToken) {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Semgrep scan results:', error);
  }
}

getSemgrepScanResults(BASE_URL, APP_TOKEN)
  .then(data => {
    console.log('Semgrep Scan Results:', JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error);
  });
