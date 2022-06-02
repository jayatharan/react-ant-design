import { BaseDbModel } from "./BaseModels";
import { Biography } from "./BiographyModels";


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

export interface CreateUser {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  role?: string;
  mobileNumber?: string;
  alternativeEmail?: string;
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
  user?: User;
  biography?:Biography | null;
}

