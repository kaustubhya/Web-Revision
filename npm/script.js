import axios from 'axios';

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
