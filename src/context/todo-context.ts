import React from 'react'
import { ITask } from '../interfaces';

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
/*const [tasks, setTasks] = React.useState<ITask[]>([
    { id: 0, title: 'Завершить тестовое' },
    { id: 1, title: 'Проверить MR' },
    { id: 2, title: 'Поправить автодоку' },
])*/

/* 
{
    add(title: string) {
        setTasks([...tasks, {
            title,
            id: tasks.length,
        }])
    },
    edit(editedTask: ITask): void {
        setTasks(tasks.map(task => {
            if (task.id == editedTask.id) {
                task.title = editedTask.title;
            }
            return task;
        }))
    },
    remove(id: number): void {
        setTasks(tasks.filter(task => task.id !== id));
    }
    
}
*/
const Context = React.createContext<IContext>({
    add(title: string) {},
    edit(editedTask: ITask) {},
    remove(id: number): void {},
});

export default Context;