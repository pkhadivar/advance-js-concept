// promises

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .catch((err) => console.error(err))
      .then(data => console.log(data))