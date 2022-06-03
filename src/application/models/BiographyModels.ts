import { Address, BaseDbModel, Company } from "./BaseModels";
import { User } from "./UserModels";

export interface Biography extends BaseDbModel {
  userId?: string;
  user?: User;
  firstName?: string;
  lastName?: string;
  companyId?: string;
  company?: Company;
  jobRole?: string;
  addressId?: string;
  address?: Address;
  image?: string;
}
