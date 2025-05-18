const axios = require('axios');

test('Get all posts [/posts] and verify number', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	const responseBody = response.data;
	expect(response.status).toBe(200);
	expect(responseBody).toHaveLength(100);
});

test('Get all posts [/posts/2] and verify userId, id, title', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
	const responseBody = response.data;
	expect(response.status).toBe(200);
	expect(responseBody.userId).toBe(1);
	expect(responseBody.id).toBe(2);
	expect(responseBody.title).toBe('qui est esse');
});

test('Get a post by ID [/posts/:id]', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts/5');
	expect(response.status).toBe(200);
	expect(response.data).toHaveProperty('id', 5);
});

test('Create new post [/posts] and verify response is successful', async () => {
	const newPost = {
		title: 'New title',
		body: 'random text for body',
		userId: 1,
	};
	const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
	const responseData = response.data;
	expect(response.status).toBe(201);
	expect(responseData.id).toBe(101);
	expect(responseData.userId).toBe(newPost.userId);
	expect(responseData.body).toBe(newPost.body);
	expect(responseData.title).toBe(newPost.title);
});

test('Create new user [/users]', async () => {
	const newUser = {
		name: 'Marta QA',
		username: 'martaqa',
		email: 'marta@qa.com',
	};

	const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);

	expect(response.status).toBe(201);
	expect(response.data).toMatchObject(newUser);
	expect(response.data).toHaveProperty('id');
	console.log(newUser);
});
