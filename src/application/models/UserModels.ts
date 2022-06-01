import { BaseDbModel } from "./BaseModels";
import { UserAddress } from "./UserAddress";
import UserCompany from "./UserCompany";

export interface CreateUser {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    role: string;
    mobileNumber: string;
    alternativeEmail: string;
}

export interface User extends BaseDbModel {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    role: string;
    mobileNumber: string;
    alternativeEmail: string;
    image: string;
}

export interface UpdateUser {
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    mobileNumber?: string;
    alternativeEmail?: string;
    image?: string;
}

export interface UserDetails {
    user?: User,
    biography : BiographyUserModel,
}

export interface BiographyUserModel {
    firstName?: string;
    lastName?: string;
    company?: UserCompany;
    jobRole?: string;
    address?: UserAddress;
    postCode?: string;
    image?: string;
}


