// File path of the JSON file
const filePath = 'data.json';

// Fetch the JSON file
fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    console.log('JSON data:', jsonData);
  })
  .catch(error => {
    console.error('There was a problem fetching the JSON file:', error);
  });
