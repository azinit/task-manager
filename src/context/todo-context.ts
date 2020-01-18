import React from 'react'
import { ITask } from '../interfaces';
import { listenerCount } from 'cluster';

export interface IContext {
    add(title: string): void;
    edit(editedTask: ITask): void;
    remove(id: number): void;
}

export const initialTasks: ITask[] = [
    { id: 0, title: 'Завершить тестовое' },
    { id: 1, title: 'Проверить MR' },
    { id: 2, title: 'Поправить автодоку' },
]

const TodoContext = React.createContext<IContext>({
    add(title: string) { console.log("ADD: not implemented!")},
    edit(editedTask: ITask) { console.log("EDIT: not implemented!")},
    remove(id: number) { console.log("REMOVE: not implemented!")},
});

export default TodoContext;