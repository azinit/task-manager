import Fetch from './_fetch/fetch';

/**
 * Библиотека по получению данных с сервера
 * @library server/fetch
 * @includes interfaces server/_fetch/interfaces
 * @includes Fetch server/_fetch/fetch
 * @author Азин И.А.
 */

export function onRemoveError() {
    console.error(`Объект не найден.
    Но обычный клиент не сможет добиться такой ситуации, т.к. для этого придется удалить несуществующее задание :)
    `);
}

export {BaseResponse, AddResponse, ListResponse, RemoveResponse, CallbackResponse} from './_fetch/interfaces';
export default Fetch