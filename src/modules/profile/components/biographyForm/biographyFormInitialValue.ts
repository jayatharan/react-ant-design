import { Biography } from "../../../../application/models/BiographyModels";
import biographyFormModel from "./biographyFormModel";

const {
  formField: { firstName, lastName, company, jobRole, address },
} = biographyFormModel;

const biographyFormInitialValue: Biography = {
  [firstName.name]: firstName.initialValue,
  [lastName.name]: lastName.initialValue,
  [company.name]: company.initialValue,
  [jobRole.name]: jobRole.initialValue,
  [address.name]: address.initialValue,
};

export default biographyFormInitialValue;
