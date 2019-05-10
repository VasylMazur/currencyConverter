import {Dinero} from 'dinero.js';

export interface IFormState {
    fromCurrency: Dinero,
    toCurrency: Dinero
    errors: any[]
}

export interface IAppState {
    formState: IFormState
}