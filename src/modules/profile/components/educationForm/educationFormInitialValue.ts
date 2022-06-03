import { Educational } from "../../../../application/models/EducationModels";
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

const educationFormInitialValue: Educational = {
  [courseName.name]: courseName.initialValue,
  [type.name]: type.initialValue,
  [organizationName.name]: organizationName.initialValue,
  [description.name]: description.initialValue,
  [startDate.name]: startDate.initialValue,
  [endDate.name]: endDate.initialValue,
  [image.name]: image.initialValue,
  [address.name]: address.initialValue,
};

export default educationFormInitialValue;
