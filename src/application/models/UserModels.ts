import { BaseDbModel } from "./BaseModels";

export interface CreateUser {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    role:string;
    mobileNumber:string;
    alternativeEmail:string;
}

export interface User extends BaseDbModel{
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    role:string;
    mobileNumber:string;
    alternativeEmail:string;
}