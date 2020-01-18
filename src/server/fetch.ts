import { ITask } from '../client/interfaces';

// TODO: to lib (--isolatedModules: false)

/**
 * Библиотека по получению данных с сервера
 * @library server/fetch
 * @includes BaseResponse server/BaseResponse
 * @includes AddResponse server/AddResponse
 * @includes ListResponse server/ListResponse
 * @includes RemoveResponse server/RemoveResponse
 * @includes Fetch server/_fetch/fetch
 * @author Азин И.А.
 */

/**
 * @interface server/BaseResponse
 * @author Азин И.А.
 */
export interface BaseResponse {
    success: boolean;
    error: string;
}

/**
  * @interface server/AddResponse
  * @author Азин И.А.
  */
export interface AddResponse extends BaseResponse {
    id: number
}

/**
  * @interface server/ListResponse
  * @author Азин И.А.
  */
export interface ListResponse extends BaseResponse {
    data: ITask[],
    length: number,
}

/**
  * @interface server/RemoveResponse
  * @author Азин И.А.
  */
export interface RemoveResponse extends BaseResponse {
}

/**
  * @interface server/CallbackResponse
  * @author Азин И.А.
  */
export interface CallbackResponse {
    (response: BaseResponse): void;
}

/**
  * @function onRemoveHandler
  * @author Азин И.А.
  */
export function onRemoveHandler(response: BaseResponse) {
    if (!response.success) {
        console.error(response.error) // "Объект не найден"
        console.log('Но обычный клиент не сможет добиться такой ситуации, т.к. для этого придется удалить несуществующее задание :)')
    }
}

const Urls = {
    list: 'https://test.megapolis-it.ru/api/list',
    add: 'https://test.megapolis-it.ru/api/list',
    remove(id: number) { return `https://test.megapolis-it.ru/api/list/${id}` },
    edit(id: number) { return `https://test.megapolis-it.ru/api/list/${id}` },
}

/**
  * @class server/Fetch
  * @author Азин И.А.
  */
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