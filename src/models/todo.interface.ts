export interface ITodo {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    deadLine: Date;
    status: TodoStatus
}

export enum Priority {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}
export enum TodoStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'In Progress',
    DONE = 'Done'
}

export const PriorityOrder = {
    [Priority.HIGH] : 1,
    [Priority.MEDIUM] : 2,
    [Priority.LOW] : 3,
} as const;


export interface ITodoAction {
    type: string,
    payload: ITodo
}