import { User } from "./UserModels";

export interface BaseDbModel {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FileResponse {
  fieledname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  description: string;
  filename: string;
  path: string;
  size: number;
}

export interface Address extends BaseDbModel {
  userId?: string;
  user?: User | null;
  address?: string;
  city?: string;
  country?: string;
  postCode?: string;
}

export interface Company extends BaseDbModel {
  userId?: string;
  user?: User | null;
  name: string;
  description?: string;
  addressId?: string;
  address?: Address | null;
}
