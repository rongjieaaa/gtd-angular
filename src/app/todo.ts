export interface  Todo {
    title: string;
    items: Array<TodoItem>
    completedItems: Array<TodoItem>
    deletedItems: Array<TodoItem>
}

export interface  TodoItem {
    uuid?: string;
    title: string;
    completed: boolean;
    deleted: boolean;
}