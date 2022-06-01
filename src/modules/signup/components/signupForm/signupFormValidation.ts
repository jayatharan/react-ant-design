import * as yup from "yup";
import signupFormModel from "./signupFormModel";

const {
  formField: {
    name,
    email,
    alternativeEmail,
    password,
    confirmPassword,
    mobileNumber,
    // image,
    role,
  },
} = signupFormModel;

const signupFormValidationSchema = yup.object().shape({
  [name.name]: yup.string().required(name.requiredErrorMsg),
  [email.name]: yup
    .string()
    .email("Must Valid Email")
    .required(email.requiredErrorMsg),
  [alternativeEmail.name]: yup.string().email("Must Valid Email"),

  [password.name]: yup
    .string()
    .required(password.requiredErrorMsg)
    .min(6, password.minCharacterError)
    .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
  [confirmPassword.name]: yup
    .string()
    .required(confirmPassword.requiredErrorMsg)
    .test("password-match", "Password musth match", function (value) {
      return this.parent.password === value;
    }),
  [mobileNumber.name]: yup.string(),
  // [image.name]: yup.string().required(image.requiredErrorMsg),
  [role.name]: yup.string().required(role.requiredErrorMsg),
});

export default signupFormValidationSchema;
