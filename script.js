const baseURL = "http://www.boredapi.com/api/activity/"
fetch(baseURL)
  .then(response => response.json())
  .then(data => console.log(data))