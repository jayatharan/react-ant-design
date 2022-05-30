import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, FormikValues, FormikHelpers } from "formik";
import { CreateUser } from "../../../application/models/UserModels";
import signupFormInitialValue from "./signupForm/signupFormInitialValue";
import signupFormModel from "./signupForm/signupFormModel";
import signupFormValidationSchema from "./signupForm/signupFormValidation";
import UserApi from "../../../api/UserApi";
import { APP_ROUTES } from "../../../application/constants/AppRoutes";

import { Space, Spin } from "antd";
import { Title } from "../../../shared/Typograpgy";
import TextField from "../../../shared/formFields/TextField";
import Button from "../../../shared/Button";
import ImageUploadField from "../../../shared/formFields/ImageUploadField";

const {
  formField: {
    name,
    email,
    alternativeEmail,
    password,
    confirmPassword,
    // image,
    role,
    mobileNumber,
  },
} = signupFormModel;

const SignupForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    const data: CreateUser = { ...values };
    setLoading(true);
    try {
      const userCreation = await UserApi.createUserAsync(data);
      console.log(userCreation);
      navigate(`/${APP_ROUTES.LOGIN}`);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Spin spinning={loading} delay={100}>
      <div
        style={{ maxWidth: "600px", marginInline: "auto", marginTop: "30px" }}
      >
        <Formik
          initialValues={signupFormInitialValue}
          onSubmit={handleSubmit}
          validationSchema={signupFormValidationSchema}
        >
          {(formik) => (
            <Form>
              <Space
                direction="vertical"
                size="large"
                style={{ display: "flex", marginInline: "10px" }}
              >
                <Title style={{ marginBottom: "0px" }} level={2}>
                  SignUp
                </Title>

                <TextField
                  name={name.name}
                  label={name.label}
                  size="large"
                  type="text"
                />
                <TextField
                  name={email.name}
                  label={email.label}
                  size="large"
                  type="email"
                />
                <TextField
                  name={password.name}
                  label={password.label}
                  size="large"
                  type="password"
                />
                <TextField
                  name={confirmPassword.name}
                  label={confirmPassword.label}
                  size="large"
                  type="password"
                />
                <TextField
                  name={alternativeEmail.name}
                  label={alternativeEmail.label}
                  size="large"
                  type="email"
                />
                <TextField
                  name={mobileNumber.name}
                  label={mobileNumber.label}
                  size="large"
                  type="text"
                />

                <TextField
                  name={role.name}
                  label={role.label}
                  size="large"
                  type="text"
                />
                {/* <ImageUploadField name={image.name} label={image.label} /> */}

                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  style={{ width: "100%" }}
                  onClick={() => formik.submitForm()}
                >
                  SignUp
                </Button>
              </Space>
            </Form>
          )}
        </Formik>
      </div>
    </Spin>
  );
};

export default SignupForm;
