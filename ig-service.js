const fetch = require('node-fetch');

const BASE_URL = 'https://api.instagram.com/v1/users/self/'
const APP_TOKEN = "IGQV01abd4d3.0a8b8a7.0a0b0c6d6f6e1a1b1c1d1e98765a7b3c"

// Function to fetch scan results from Semgrep API
async function getIGResults(apiUrl, apiToken) {
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
    console.error('Error fetching instagram results:', error);
  }
}

getIGResults(BASE_URL, APP_TOKEN)
  .then(data => {
    console.log('Instagram Results:', JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error);
  });
