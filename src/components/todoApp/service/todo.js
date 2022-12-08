class TodoHandler {
    #todos = [];
    #todo = {
        state: "active" || "completed",
        todo: "",
        id: 0,
    }
    #updater;

    updateTodo(isChecked, checkedId) {
        const todo = this.#todos.find(todo => todo.id === parseInt(checkedId));
        isChecked ?
            todo['state'] = "completed" :
            todo['state'] = "active";
    }
    set todo(todo) {
        this.#todo = { state: "active", todo, id: this.#todos.length };
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
    deleteTodo(todoState, checkedId) {
        if (todoState === "active") {
            return;
        }
        this.#todos = [...this.#todos.filter(todo => todo.id !== parseInt(checkedId))];
        this.#updater(this.#todos);
    }
    filterTodo(navState) {
        if (navState) {
            const result = this.#todos.filter(todo => todo.state === navState);
            return result;
        } else {
            return this.#todos;
        }
    }
}

export default TodoHandler;