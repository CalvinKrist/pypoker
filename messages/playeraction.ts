export interface Raise {
    amount: number;
}

export function raise(amount: number): Raise{
    return {amount: amount}
}

export const FOLD = "fold";
export const CALL = "call";
export const RAISE = "raise";
