import React, { useState, useEffect, useContext, useRef } from "react";
import { Formik, Form, FormikValues, FormikHelpers, FormikProps } from "formik";
import educationFormValidationSchema from "./educationForm/educationFormValidation";
import educationFormModel from "./educationForm/educationFormModel";
import educationFormInitialValue from "./educationForm/educationFormInitialValue";
import UserApi from "../../../api/UserApi";

import TextField from "../../../shared/formFields/TextField";
import ImageUploadField from "../../../shared/formFields/ImageUploadField";
import Button from "../../../shared/Button";
import { Title } from "../../../shared/Typograpgy";
import { Space, Spin } from "antd";
import { AuthContext } from "../../../auth/AuthProvider";
import { Educational } from "../../../application/models/EducationModels";
import AddressField from "../../../shared/formFields/AddressField";

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

const EducationForm = () => {
  const formikRef = useRef<FormikProps<Educational>>(null);
  //   const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const onClose = () => {
    return;
  };
  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    const data: Educational = { ...values };
    setLoading(true);
    try {
      const educationResponse = await UserApi.addEducationAsync(data);
      console.log(educationResponse);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Spin spinning={loading} delay={100}>
      <div style={{ maxWidth: "600px", marginInline: "auto" }}>
        <Formik
          innerRef={formikRef}
          initialValues={educationFormInitialValue}
          validationSchema={educationFormValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <Space
                direction="vertical"
                size="middle"
                style={{ display: "flex", marginInline: "10px" }}
              >
                <TextField
                  name={courseName.name}
                  label={courseName.label}
                  size="middle"
                  type="text"
                />
                <TextField
                  name={type.name}
                  label={type.label}
                  size="middle"
                  type="text"
                />
                <TextField
                  name={organizationName.name}
                  label={organizationName.label}
                  size="middle"
                  type="text"
                />
                <TextField
                  name={description.name}
                  label={description.label}
                  size="middle"
                  type="text"
                />

                <TextField
                  name={startDate.name}
                  label={startDate.label}
                  size="middle"
                  type="date"
                />
                <TextField
                  name={endDate.name}
                  label={endDate.label}
                  size="middle"
                  type="date"
                />

                <ImageUploadField name={image.name} label={image.label} />
                <AddressField
                  name={address.name}
                  label={address.label}
                  size="middle"
                />
                <Space style={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    type="primary"
                    shape="round"
                    onClick={() => formik.submitForm()}
                  >
                    Save
                  </Button>
                  <Button onClick={onClose} shape="round">
                    Cancel
                  </Button>
                </Space>
              </Space>
            </Form>
          )}
        </Formik>
      </div>
    </Spin>
  );
};

export default EducationForm;
