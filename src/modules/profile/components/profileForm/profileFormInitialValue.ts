import { UpdateUser } from "../../../../application/models/UserModels";
import profileFormModel from "./profileFormModel";

const {
  formField: {
    name,
    email,
    password,
    role,
    mobileNumber,
    alternativeEmail,
    image,
  },
} = profileFormModel;

const profileFormInitialValue: UpdateUser = {
  [name.name]: name.initialValue,
  [email.name]: email.initialValue,
  [password.name]: password.initialValue,
  [role.name]: role.initialValue,
  [mobileNumber.name]: mobileNumber.initialValue,
  [alternativeEmail.name]: alternativeEmail.initialValue,
  [image.name]: image.initialValue,
};

export default profileFormInitialValue;
