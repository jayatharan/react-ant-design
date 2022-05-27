import { CompanyBasic, DateDuration } from "./BaseModels";

export interface ProfessionalDetail {
  company: CompanyBasic;
  jobRole: string;
  duration: DateDuration;
}
