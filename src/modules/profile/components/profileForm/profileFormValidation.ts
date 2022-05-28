import * as yup from 'yup';
import profileFormModel from './profileFormModel';

const {
    formField:{
        name,
        email,
        password,
        role,
        mobileNumber,
        alternativeEmail,
        image
    }
} = profileFormModel;

const profileFormValidationSchema = yup.object().shape({
    [name.name]:yup.string(),
    [email.name]:yup.string()
    .email("Must be a valid email")
    .required(email.requiredErrorMsg),
    [password.name]: yup
        .string()
        .min(6, password.minCharacterError)
        .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
    [role.name]:yup
        .string()
        .oneOf(["client", "student", "freelancer", "general"], "User role is not valid")
        .required(role.requiredErrorMsg),
    [mobileNumber.name]:yup.string(),
    [alternativeEmail.name]:yup.string()
    .email("Must be a valid email"),
    [image.name]:yup.string()
})

export default profileFormValidationSchema;