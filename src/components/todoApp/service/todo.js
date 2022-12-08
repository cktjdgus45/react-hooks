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
        this.#updater(prev => [...prev]);
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
    //12/8 목 delete완성 git commit 하기.
    deleteTodo(todoState, checkedId) {
        if (todoState === "active") {
            return;
        }
        this.#todos = [...this.#todos.filter(todo => todo.id !== parseInt(checkedId))];
        this.#updater(this.#todos);
    }
    filterTodo(navState) {
        return this.#todos.filter(todo => todo.state === navState);
    }
}

export default TodoHandler;