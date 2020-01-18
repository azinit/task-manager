import { ITask } from "../../interfaces";

/**
 * 
 */
const Urls = {
    list: 'https://test.megapolis-it.ru/api/list',
    add: 'https://test.megapolis-it.ru/api/list',
    remove(id: number) {return `https://test.megapolis-it.ru/api/list/${id}`} ,
    edit(id: number) {return `https://test.megapolis-it.ru/api/list/${id}`} ,
}

const Fetch = {
    list() {
        return fetch(Urls.list);
    },
    add(title: string) {
        return fetch(Urls.add, {
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
        return fetch(Urls.remove(id), {
            method: 'DELETE',
        });
    },
    edit(task: ITask) {
        return fetch(Urls.edit(task.id), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: task.title
            }),
        });
    }
}

export default Fetch;