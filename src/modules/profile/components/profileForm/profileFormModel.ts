const profileFormModel = {
    formId: "profileForm",
    formField:{
        name:{
            name: "name",
            label: "Username",
            initialValue: "",
            requiredErrorMsg: "Username is required."
        },
        email:{
            name: "email",
            label: "Email",
            initialValue: "",
            requiredErrorMsg: "Email is required."
        },
        password:{
            name: "password",
            label: "Password",
            initialValue: "",
            requiredErrorMsg: "Password is required.",
            minCharacterError: "Password is too short - should be 6 chars minimum."
        },
        role:{
            name: "role",
            label: "User Role",
            initialValue: "general",
            requiredErrorMsg: "User Role is required."
        },
        mobileNumber:{
            name: "mobileNumber",
            label: "Contact No",
            initialValue: "",
            requiredErrorMsg: "Contact No is required."
        },
        alternativeEmail:{
            name: "alternativeEmail",
            label: "Alternative Email",
            initialValue: "",
            requiredErrorMsg: "Alternative Email is required."
        },
        image:{
            name: "image",
            label: "Avatar",
            initialValue: "",
            requiredErrorMsg: "Avatar Image is required."
        }
    }
}

export default profileFormModel;