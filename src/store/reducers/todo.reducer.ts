import { ITodo, ITodoAction, PriorityOrder } from "../../models/todo.interface"

const initialState: {
    todos: ITodo[]
} = {
    todos: []
}

export default (state = initialState, action: ITodoAction) => {

    switch (action.type) {
        case "ADD_TODO":
            let todos = [...state.todos, action.payload]
            todos = todos.sort((a, b) => PriorityOrder[a.priority] - PriorityOrder[b.priority])
            return {
                todos: todos
            }
        default:
            return state
    }
} 