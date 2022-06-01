const signupFormModel = {
  formId: "quarryForm",
  formField: {
    name: {
      name: "name",
      label: "Name",
      initialValue: "",
      requiredErrorMsg: "User Name is required.",
    },
    email: {
      name: "email",
      label: "Email",
      initialValue: "",
      requiredErrorMsg: "Email is required.",
    },
    password: {
      name: "password",
      label: "Password",
      initialValue: "",
      requiredErrorMsg: "Password is required.",
      minCharacterError: "Password is too short - should be 6 chars minimum.",
    },
    confirmPassword: {
      name: "confirmPassword",
      label: "Confirm Password",
      initialValue: "",
      requiredErrorMsg: "Password Need to Match",
    },
    alternativeEmail: {
      name: "alternativeEmail",
      label: "Alternative Email",
      initialValue: "",
      requiredErrorMsg: "Alternative Email is required.",
    },
    mobileNumber: {
      name: "mobileNumber",
      label: "Mobile Number",
      initialValue: "",
      requiredErrorMsg: "Mobile Number is required.",
    },
    image: {
      name: "image",
      label: "Image",
      initialValue: "",
      requiredErrorMsg: "Image is required",
    },
    role: {
      name: "role",
      label: "Role",
      initialValue: "general",
      requiredErrorMsg: "Role is required",
    },
  },
};

export default signupFormModel;
