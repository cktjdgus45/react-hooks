class TodoHandler {
    #todos = [];
    #todo = {
        state: "active" || "completed",
        todo: "",
        id: 0
    }
    set updateTodo(checkedTodo) {
        const todo = this.#todos.find(todo => todo.id === checkedTodo.id);
        todo['state'] = "completed";
    }
    set todo(todo) {
        this.#todo = { ...this.#todo, todo, id: this.#todos.length };
        this.#todos.push(this.#todo);
    }
    get todos() {
        return this.#todos;
    }
    deleteTodo(checkedId) {
        this.#todos = [...this.#todos.filter(todo => todo.id !== checkedId)];
    }
    filterTodo(navState) {
        return this.#todos.filter(todo => todo.state === navState);
    }
}

export default TodoHandler;