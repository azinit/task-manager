import React from 'react'
import { ITask } from '../interfaces';
import { listenerCount } from 'cluster';

export interface IContext {
    add(title: string): void;
    remove(id: number): void;
}

export const initialTasks: ITask[] = [
    { id: 0, title: 'Завершить тестовое' },
    { id: 1, title: 'Проверить MR' },
    { id: 2, title: 'Поправить автодоку' },
]

const TodoContext = React.createContext<IContext>({
    add(title: string) { console.log("ADD: not implemented!")},
    remove(id: number) { console.log("REMOVE: not implemented!")},
});

export default TodoContext;