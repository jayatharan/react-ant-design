import React, { useState, useContext, useRef, useEffect } from "react";
import { Formik, Form, FormikValues, FormikHelpers, FormikProps } from "formik";
import biographyFormValidationSchema from "./biographyForm/biographyFormValidation";
import biographyFormModel from "./biographyForm/biographyFormModel";
import biographyFormInitialValue from "./biographyForm/biographyFormInitialValue";
import UserApi from "../../../api/UserApi";

import TextField from "../../../shared/formFields/TextField";
import AddressField from "../../../shared/formFields/AddressField";
import CompanyField from "../../../shared/formFields/CompanyField";
import { Title } from "../../../shared/Typograpgy";
import { Space, Spin } from "antd";
import { AuthContext } from "../../../auth/AuthProvider";
import { UpdateUser, User } from "../../../application/models/UserModels";
import { Biography } from "../../../application/models/BiographyModels";
import Button from "../../../shared/Button";

const {
  formField: { firstName, lastName, company, jobRole, address },
} = biographyFormModel;

const BiographyForm = () => {
  const formikRef = useRef<FormikProps<Biography>>(null);
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const onClose = () => {
    return;
  };

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    const data: Biography = { ...values };
    setLoading(true);
    try {
      const biographyResponse = await UserApi.updateUserBiographyAsync(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authContext?.auth.userDetails?.biography) {
      if (formikRef.current) {
        formikRef.current.setFieldValue(
          biographyFormModel.formField.firstName.name,
          authContext.auth.userDetails.biography.firstName ??
            biographyFormModel.formField.firstName.initialValue
        );
        formikRef.current.setFieldValue(
          biographyFormModel.formField.lastName.name,
          authContext.auth.userDetails.biography.lastName ??
            biographyFormModel.formField.lastName.initialValue
        );
        formikRef.current.setFieldValue(
          biographyFormModel.formField.jobRole.name,
          authContext.auth.userDetails.biography.jobRole ??
            biographyFormModel.formField.jobRole.initialValue
        );
        formikRef.current.setFieldValue(
          biographyFormModel.formField.company.name,
          authContext.auth.userDetails.biography.company ??
            biographyFormModel.formField.company.initialValue
        );
        formikRef.current.setFieldValue(
          biographyFormModel.formField.address.name,
          authContext.auth.userDetails.biography.address ??
            biographyFormModel.formField.address.initialValue
        );
      }
    }
  }, [authContext]);

  return (
    <Spin spinning={loading} delay={100}>
      <div style={{ maxWidth: "600px", marginInline: "auto" }}>
        <Formik
          innerRef={formikRef}
          initialValues={biographyFormInitialValue}
          validationSchema={biographyFormValidationSchema}
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
                  name={firstName.name}
                  label={firstName.label}
                  size="middle"
                  type="text"
                />
                <TextField
                  name={lastName.name}
                  label={lastName.label}
                  size="middle"
                  type="text"
                />
                <TextField
                  name={jobRole.name}
                  label={jobRole.label}
                  size="middle"
                  type="text"
                />
                <AddressField
                  name={address.name}
                  label={address.label}
                  size="middle"
                />

                <CompanyField
                  name={company.name}
                  label={company.label}
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

export default BiographyForm;
