import { TodoItem } from './todoItem';

export class todoCollection {
    private nextId : number = 1;

    constructor(public userName, public todoItems: TodoItem[] =[]) {
        //no statements required
    }

    addTodo(task: string): number {
        while (this.getTodoById(this.nextId) != null) {
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId++;
    }

    getTodoById(id: number): TodoItem {
        return this.todoItems.find(todo => todo.id === id);
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem != null) {
            todoItem.complete = complete;
        }
    }

    removeTodo(id: number){
        let index = this.todoItems.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todoItems.splice(index, 1);
        }
    }
}