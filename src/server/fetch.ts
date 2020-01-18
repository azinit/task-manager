import { ITask } from "../interfaces";

const Fetch = {
    add(title: string) {
        return fetch('https://test.megapolis-it.ru/api/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title
            }),
        })
    },
    remove(id: number) {
        return fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
            method: 'DELETE',
        })
    },
    edit(task: ITask) {
        return fetch(`https://test.megapolis-it.ru/api/list/${task.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: task.title
            }),
        })
    }
}

export default Fetch;