export * from './signsApi';
import { SignsApi } from './signsApi';
export * from './todosApi';
import { TodosApi } from './todosApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [SignsApi, TodosApi, UsersApi];
