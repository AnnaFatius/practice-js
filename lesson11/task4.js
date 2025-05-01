class Todo {
    async getTodo(todoId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        return response.json()
      }
}
const todo = new Todo()
const newResp1 = await todo.getTodo(1)
console.log(newResp1)

class User {
    async getUser(userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        return response.json()
      }
}
const user = new User()
const newResp2 = await user.getUser(1)
console.log(newResp2)