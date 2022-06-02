import { Address, BaseDbModel } from "./BaseModels";
import { User } from "./UserModels";

export interface Educational extends BaseDbModel {
  userId?: string;
  user?: User;
  courseName?: string;
  type?: string;
  organizationName?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  image?: string;
  addressId?: string;
  address?: Address;
}
