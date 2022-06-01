import * as yup from "yup";
import biographyFormModel from "./biographyFormModel";

const {
  formField: { firstName, lastName, company, jobRole, address },
} = biographyFormModel;

const biographyFormValidationSchema = yup.object().shape({
  [firstName.name]: yup.string(),
  [lastName.name]: yup.string(),
  [company.name]: yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    description: yup.string(),
    address: yup.object().shape({
      id: yup.string(),
      address: yup.string(),
      city: yup.string(),
      country: yup.string(),
      postCode: yup.string(),
    }),
  }),
  [jobRole.name]: yup.string(),
  [address.name]: yup.object().shape({
    id: yup.string(),
    address: yup.string(),
    city: yup.string(),
    country: yup.string(),
    postCode: yup.string(),
  }),
});

export default biographyFormValidationSchema;
