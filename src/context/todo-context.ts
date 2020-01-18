import React from 'react'

export interface IContext {
    add(title: string): void;
    remove(id: number): void;
}

const TodoContext = React.createContext<IContext>({
    add(title: string) { throw new Error("ADD: not implemented!") },
    remove(id: number) { throw new Error("REMOVE: not implemented!") },
});

export default TodoContext;