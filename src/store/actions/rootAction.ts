import { ITodo } from '../../models/todo.interface';

export const addTodo = (todo: ITodo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}