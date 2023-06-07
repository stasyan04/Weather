fetch('cities.json')
  .then(response => response.json())
  .then(data => {
    new Awesomplete(document.querySelector('#city'), {
      list: data,
      minChars: 1
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });