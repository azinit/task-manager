import Fetch from './_fetch/fetch';
import {BaseResponse} from './_fetch/interfaces';
/**
 * Библиотека по получению данных с сервера
 * @library server/fetch
 * @includes interfaces server/_fetch/interfaces
 * @includes Fetch server/_fetch/fetch
 * @author Азин И.А.
 */


export {BaseResponse, AddResponse, ListResponse, RemoveResponse, CallbackResponse} from './_fetch/interfaces';
export function onRemoveHandler(response: BaseResponse) {
    if (!response.success) {
        console.error(response.error) // "Объект не найден"
        console.log('Но обычный клиент не сможет добиться такой ситуации, т.к. для этого придется удалить несуществующее задание :)')
    }
}
export default Fetch