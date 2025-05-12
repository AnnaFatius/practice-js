async function getTodoAsync(todoId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
	return response.json();
}

async function getUserAsync(userId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	return response.json();
}

Promise.all([getTodoAsync(1), getUserAsync(1)])
	.then(([todo, user]) => {
		console.log('Todo response: ', todo);
		console.log('User response: ', user);
	})
	.catch((error) => {
		console.error('ERROR: ', error);
	});

Promise.race([getTodoAsync(1), getUserAsync(1)])
	.then((firstResult) => {
		console.log('First response: ', firstResult);
	})
	.catch((error) => {
		console.error('ERROR: ', error);
	});
