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

type Operation = 'list' | 'add' | 'remove' | 'edit';

const DOMAIN_API = 'https://test.megapolis-it.ru/api';
const Urls = {
    list: `${DOMAIN_API}/list`,
    add: `${DOMAIN_API}/list`,
    remove(id: number) { return `${DOMAIN_API}/list/${id}` },
    edit(id: number) { return `${DOMAIN_API}/list/${id}` },
}

/**
 * Синглтон-контроллер по получению данных о задачах с сервера
 * @class server/Fetch
 * @singletone
 * @author Азин И.А.
 */
const Fetch = {
    /**
     * Получения списка
     * @remark
     * Описание: Метод вернёт список всех задач
     * url: https://test.megapolis-it.ru/api/list
     * type: GET
     * Модель: Object<data: Array, length: Number, success: Bool, error: String>
     */
    getList() {
        return fetch(Urls.list);
    },
    /**
     * Создание задачи
     * @remark
     * Описание: Метод создаст новую запись и вернет ее идентификатор
     * url: https://test.megapolis-it.ru/api/list
     * type: POST
     * Модель(Request): Object<title: String>
     * Модель(Response): Object<id: Number, success: Bool, error: String>
     */
    add(title: string) {
        return fetch(Urls.add, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title
            }),
        });
    },
    /**
     * Удаление задачи
     * @remark
     * Описание: Метод удаляет запись
     * url: https://test.megapolis-it.ru/api/list/{ID}
     * type: DELETE
     * Модель(Response): Object<success: Bool, error: String>
     */
    remove(id: number) {
        return fetch(Urls.remove(id), {
            method: 'DELETE',
        });
    },
    /**
     * Редактирование задачи
     * @remark
     * Описание: Метод изменит данные
     * url: https://test.megapolis-it.ru/api/list/{ID}
     * type: POST
     * Модель(Request): Object<title: String>
     * Модель(Response): Object<success: Bool, error: String>
     */
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

/**
  * @function onCatchHandler
  * @author Азин И.А.
  */
export function onCatchHandler(operation: Operation) {
    const message = 'Внутренняя ошибка сервера.';
    const details = () => {
        switch (operation) {
            case 'list':
                return 'Попробуйте зайти на страницу позднее';
            case 'add':
                return 'Попробуйте добавить задачу позднее'
            case 'edit':
                return 'Попробуйте редактировать задачу позднее'
            case 'remove':
                return 'Попробуйте удалить задачу позднее';
        }
    }
    alert(`${message}\r\n${details()}`)
}


export default Fetch;