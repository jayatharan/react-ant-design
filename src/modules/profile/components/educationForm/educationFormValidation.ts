import * as yup from "yup";
import educationFormModel from "./educationFormModel";

const {
  formField: {
    courseName,
    type,
    organizationName,
    description,
    startDate,
    endDate,
    image,
    address,
  },
} = educationFormModel;

const educationFormValidationSchema = yup.object().shape({
  [courseName.name]: yup.string(),
  [type.name]: yup.string(),
  [organizationName.name]: yup.string(),
  [description.name]: yup.string(),
  [startDate.name]: yup.string(),
  [endDate.name]: yup.string(),
  [image.name]: yup.string(),
  [address.name]: yup.object().shape({
    id: yup.string(),
    address: yup.string(),
    city: yup.string(),
    country: yup.string(),
    postCode: yup.string(),
  }),
});

export default educationFormValidationSchema;
