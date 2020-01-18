import { ITask } from "../../interfaces";

export interface BaseResponse {
    success: boolean;
    error: string;
}

export interface AddResponse extends BaseResponse {
    id: number
}

export interface ListResponse extends BaseResponse {
    data: ITask[],
    length: number,
}

export interface RemoveResponse extends BaseResponse {
}

export interface CallbackResponse {
    (response: BaseResponse): void;
}