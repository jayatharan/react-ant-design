import { Address, DateDuration } from "./BaseModels";

export interface EducationalDetail {
  organizationName: string;
  address: Address;
  type: string;
  fieldName: string;
  courseName: string;
  duration: DateDuration;
  description: string;
}
