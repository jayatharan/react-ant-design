import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, FormikValues, FormikHelpers } from "formik";
import {
  CreateSession,
  SessionResponse,
} from "../../../application/models/SessionModels";
import loginFormModel from ".//loginForm/loginFormModel";
import loginFormvalidationSchema from "./loginForm/loginFormValidation";
import loginFormInitialValue from "./loginForm/loginFormInitialValue";
import SessionApi from "../../../api/SessionApi";
import useLoadUserDetails from "../../../auth/LoadUserDetailsHook";
import { APP_ROUTES } from "../../../application/constants/AppRoutes";
import { setCookie } from "../../../utils/CookieAccess";
import { setAuthHeader } from "../../../api/AxiosInstance";

import GoogleLogin from "react-google-login";
import TextField from "../../../shared/formFields/TextField";
import Button from "../../../shared/Button";
import { Title } from "../../../shared/Typograpgy";
import { Space, Spin } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const {
  formField: { email, password },
} = loginFormModel;

const google_client_id = process.env.REACT_APP_CLIENT_ID;

const LoginForm = () => {
  const navigate = useNavigate();
  const loadUserDetails = useLoadUserDetails();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    const data: CreateSession = { ...values };
    setLoading(true);
    try {
      const sessionResponse = await SessionApi.createSessionAsync(data);
      handleLogin(sessionResponse);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleLogin = (sessionResponse: SessionResponse) => {
    setCookie("access-token", sessionResponse.accessToken, 1);
    setCookie("refresh-token", sessionResponse.refreshToken, 90);
    setAuthHeader(sessionResponse.accessToken);
    loadUserDetails();
    navigate(`/${APP_ROUTES.DASHBOARD}`);
  };

  const responseGoogle = async (response: any) => {
    if (response.tokenId) {
      const sessionResponse = await SessionApi.createSessionWithGoogle({
        tokenId: response.tokenId,
      });
      handleLogin(sessionResponse);
    }
  };

  return (
    <Spin spinning={loading} delay={100}>
      <div
        style={{ maxWidth: "600px", marginInline: "auto", marginTop: "30px" }}
      >
        <Formik
          initialValues={loginFormInitialValue}
          onSubmit={handleSubmit}
          validationSchema={loginFormvalidationSchema}
        >
          {(formik) => (
            <Form>
              <Space
                direction="vertical"
                size="large"
                style={{ display: "flex", marginInline: "10px" }}
              >
                <Title style={{ marginBottom: "0px" }} level={2}>
                  Login
                </Title>
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
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  style={{ width: "100%" }}
                  onClick={() => formik.submitForm()}
                >
                  Login
                </Button>
                {google_client_id && (
                  <GoogleLogin
                    clientId={google_client_id as string}
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    render={(renderProps) => (
                      <Button
                        icon={<GoogleOutlined />}
                        shape="round"
                        size="large"
                        style={{ width: "100%" }}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Continue with Google
                      </Button>
                    )}
                  />
                )}
              </Space>
            </Form>
          )}
        </Formik>
      </div>
    </Spin>
  );
};

export default LoginForm;
