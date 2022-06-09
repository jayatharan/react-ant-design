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
import { Space, Spin, Steps } from "antd";
import { AuthContext } from "../../../auth/AuthProvider";
import { Educational } from "../../../application/models/EducationModels";
import AddressField from "../../../shared/formFields/AddressField";
import { UserOutlined, FileProtectOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';
import EducationalDetailApi from '../../../api/EducationalDetailApi';

const { Step } = Steps;

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

interface EducationalFormProps {
  onClose: () => void;
  selectedEducationalDetail?:Educational | null;
}

const EducationForm = ({onClose, selectedEducationalDetail}:EducationalFormProps) => {
  const formikRef = useRef<FormikProps<Educational>>(null);
  //   const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);


  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    const data: Educational = { ...values };
    setLoading(true);
    try {
      let educationResponse:Educational;
      if(selectedEducationalDetail){
        educationResponse = await EducationalDetailApi.updateEducationalDetailAsync(selectedEducationalDetail.id!, data);
      }else{
        educationResponse = await UserApi.addEducationAsync(data);
      }
      console.log(educationResponse);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
      if(selectedEducationalDetail){
          for(const key in educationFormModel.formField){
            const k = key as keyof typeof educationFormModel.formField;
            formikRef.current?.setFieldValue(
              educationFormModel.formField[k].name,
              selectedEducationalDetail[educationFormModel.formField[k].name as keyof Educational] ?? educationFormModel.formField[k].initialValue
            )
          }
      }else{
        formikRef.current?.resetForm();
      }
  }, [selectedEducationalDetail])
  

  return (
    <Spin spinning={loading} delay={100}>
      <div style={{ maxWidth: "600px", marginInline: "auto" }}>
        <Steps size="small" style={{ marginBottom: '20px' }} current={currentStep}>
          <Step title="Course Details" icon={<UserOutlined />} onClick={() => setCurrentStep(0)} />
          <Step title="Organization Details" icon={<FileProtectOutlined />} onClick={() => setCurrentStep(1)} />
        </Steps>
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
                {currentStep === 0 ? (<>
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
                </>) : (<>
                  <TextField
                    name={organizationName.name}
                    label={organizationName.label}
                    size="middle"
                    type="text"
                  />
                  <AddressField
                    name={address.name}
                    label={address.label}
                    size="middle"
                  />
                </>)}
                <Space style={{ display: "flex", justifyContent: "space-between" }}>
                  {currentStep ? (
                    <Button onClick={() => setCurrentStep(0)} shape="round">
                      <LeftOutlined /> Prev
                    </Button>
                  ) : (
                    <Button onClick={() => setCurrentStep(1)} shape="round">
                      Next <RightOutlined />
                    </Button>
                  )}
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
              </Space>
            </Form>
          )}
      </Formik>
    </div>
    </Spin >
  );
};

export default EducationForm;
