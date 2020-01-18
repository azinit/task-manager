import React from 'react'
import { CallbackResponse } from '../../server/fetch';

/**
 * Интерфейс метода по добавлению задачи
 * @interface context/todo-context/AddContext
 * @author Азин И.А.
 */
export interface AddContext {
    add(title: string, callback: CallbackResponse): void;
}

/**
 * Интерфейс метода по удалению задачи
 * @interface context/todo-context/RemoveContext
 * @author Азин И.А.
 */
export interface RemoveContext {
    remove(id: number, callback: CallbackResponse): void;
}

/**
 * Интерфейс контекста
 * @interface context/todo-context/IContext
 * @author Азин И.А.
 */
export interface IContext extends AddContext, RemoveContext {
}

/**
 * Синглтон контекста
 * @class context/todo-context/TodoContext
 * @singletone
 * @public
 * @author Азин И.А.
 */
const TodoContext = React.createContext<IContext>({
    add(title: string) { throw new Error("ADD: not implemented!") },
    remove(id: number) { throw new Error("REMOVE: not implemented!") },
});

export default TodoContext;