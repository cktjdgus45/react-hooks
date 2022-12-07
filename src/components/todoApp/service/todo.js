class TodoHandler {
    #todos = [];
    #todo = {
        state: "active" || "completed",
        todo: "",
        id: 0
    }
    #updater;

    updateTodo(isChecked, checkedId) {
        const todo = this.#todos.find(todo => todo.id === parseInt(checkedId));
        isChecked ?
            todo['state'] = "completed" :
            todo['state'] = "active";
    }
    set todo(todo) {
        this.#todo = { ...this.#todo, todo, id: this.#todos.length };
        this.#todos.push(this.#todo);
    }

    set setState(callbackFn) {
        this.#updater = callbackFn;
    }

    get todos() {
        return this.#todos;
    }
    get todo() {
        return this.#todo;
    }
    deleteTodo(checkedId) {
        this.#todos = [...this.#todos.filter(todo => todo.id !== checkedId)];
    }
    filterTodo(navState) {
        return this.#todos.filter(todo => todo.state === navState);
    }
}

export default TodoHandler;