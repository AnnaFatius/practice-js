function getTodo(todoId) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    });
  }
  
  function getUser(userId) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
    });
  }
  
  Promise.all([getTodo(1), getUser(1)])
    .then(([todo, user]) => {
      console.log("Todo response: ", todo);
      console.log("User response: ", user);
    })
    .catch((error) => {
      console.error("ERROR: ", error);
    });
  
  Promise.race([getTodo(1), getUser(1)])
    .then((firstResult) => {
      console.log("First response: ", firstResult);
    })
    .catch((error) => {
      console.error("ERROR: ", error);
    });
  