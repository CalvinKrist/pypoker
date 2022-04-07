export interface Fold {
}

export const FOLD = {
}

export interface Call {
}

export const CALL = {
}

export interface Raise {
    amount: number;
}

export function raise(amount: number): Raise{
    return {amount: amount}
}
