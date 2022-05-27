import { Address, CompanyBasic } from "./BaseModels";

export interface Biography {
  firstName?: string;
  lastName?: string;
  company?: CompanyBasic;
  jobRole?: string;
  address?: Address;
  image?: string;
}
