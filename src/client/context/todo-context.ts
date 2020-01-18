import React from 'react'
import { CallbackResponse } from '../server/fetch';

export interface AddContext {
    add(title: string, callback: CallbackResponse): void;
}

export interface RemoveContext {
    remove(id: number, callback: CallbackResponse): void;
}

export interface IContext extends AddContext, RemoveContext {
}

const TodoContext = React.createContext<IContext>({
    add(title: string) { throw new Error("ADD: not implemented!") },
    remove(id: number) { throw new Error("REMOVE: not implemented!") },
});

export default TodoContext;