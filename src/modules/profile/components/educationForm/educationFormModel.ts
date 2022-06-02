const educationFormModel = {
  formId: "educationForm",
  formField: {
    courseName: {
      name: "courseName",
      label: "Course Name",
      initialValue: "",
      requiredErrorMsg: "Course Name is required.",
    },
    type: {
      name: "type",
      label: "Type",
      initialValue: "",
      requiredErrorMsg: "Type is required.",
    },
    organizationName: {
      name: "organizationName",
      label: "Organization Name",
      initialValue: "",
      requiredErrorMsg: "Organization Name is required.",
    },
    description: {
      name: "description",
      label: "Description",
      initialValue: "",
      requiredErrorMsg: "Description is required.",
    },
    startDate: {
      name: "startDate",
      label: "Start Date",
      initialValue: "",
      requiredErrorMsg: "Start Date is required.",
    },
    endDate: {
      name: "endDate",
      label: "End Date",
      initialValue: "",
      requiredErrorMsg: "End Date is required.",
    },

    image: {
      name: "image",
      label: "Image",
      initialValue: "",
      requiredErrorMsg: "Image is required.",
    },
    address: {
      name: "address",
      label: "Address",
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

export default educationFormModel;
