const biographyFormModel = {
  formId: "biographyForm",
  formField: {
    firstName: {
      name: "firstName",
      label: "First Name",
      initialValue: "",
      requiredErrorMsg: "FirstName is required.",
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      initialValue: "",
      requiredErrorMsg: "LastName is required.",
    },
    company: {
      name: "company",
      label: "Current Company",
      initialValue: {
        id: "",
        name: "",
        description: "",
        address: {
          id: "",
          address: "",
          city: "",
          country: "",
          postCode: "",
        },
      },
      requiredErrorMsg: "Company is required.",
    },
    jobRole: {
      name: "jobRole",
      label: "Job Role",
      initialValue: "",
      requiredErrorMsg: "Job Role is required.",
    },
    address: {
      name: "address",
      label: "Current Address",
      initialValue: {
        id: "",
        address: "",
        city: "",
        country: "",
        postCode: "",
      },
      requiredErrorMsg: "Address is required.",
    },
  },
};

export default biographyFormModel;
