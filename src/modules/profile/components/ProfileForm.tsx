import React, { useState, useEffect, useContext, useRef } from 'react'
import { Formik, Form, FormikValues, FormikHelpers, FormikProps } from 'formik';
import profileFormValidationSchema from './profileForm/profileFormValidation';
import profileFormModel from './profileForm/profileFormModel';
import profileFormInitialValue from './profileForm/profileFormInitialValue';
import UserApi from '../../../api/UserApi';

import TextField from '../../../shared/formFields/TextField';
import ImageUploadField from '../../../shared/formFields/ImageUploadField';
import Button from '../../../shared/Button';
import { Title } from '../../../shared/Typograpgy';
import { Space, Spin } from 'antd';
import { AuthContext } from '../../../auth/AuthProvider';
import { UpdateUser, User } from '../../../application/models/UserModels';

const {
    formField: {
        name,
        email,
        password,
        role,
        mobileNumber,
        alternativeEmail,
        image
    }
} = profileFormModel;

interface ProfileFormPros {
    onSave:(user:User)=>void;
    onClose:()=>void;
}

const ProfileForm = ({onSave, onClose}:ProfileFormPros) => {
    const formikRef = useRef<FormikProps<UpdateUser>>(null);
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        values: FormikValues,
        actions: FormikHelpers<FormikValues>
    ) => {
        const data: UpdateUser = { ...values };
        setLoading(true);
        try {
            const userResponse = await UserApi.updateUserAsync(data);
            onSave(userResponse);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (authContext?.auth.userDetails) {
            if(formikRef.current){
                formikRef.current.setFieldValue(
                    profileFormModel.formField.email.name,
                    authContext.auth.userDetails.user.email??profileFormModel.formField.email.initialValue
                )
                formikRef.current.setFieldValue(
                    profileFormModel.formField.name.name,
                    authContext.auth.userDetails.user.name??profileFormModel.formField.name.initialValue
                )
                formikRef.current.setFieldValue(
                    profileFormModel.formField.mobileNumber.name,
                    authContext.auth.userDetails.user.mobileNumber??profileFormModel.formField.mobileNumber.initialValue
                )
                formikRef.current.setFieldValue(
                    profileFormModel.formField.alternativeEmail.name,
                    authContext.auth.userDetails.user.alternativeEmail??profileFormModel.formField.alternativeEmail.initialValue
                )
                formikRef.current.setFieldValue(
                    profileFormModel.formField.role.name,
                    authContext.auth.userDetails.user.role??profileFormModel.formField.role.initialValue
                )
                formikRef.current.setFieldValue(
                    profileFormModel.formField.image.name,
                    authContext.auth.userDetails.user.image??profileFormModel.formField.image.initialValue
                )
            }
        }
    }, [authContext])


    return (
        <Spin spinning={loading} delay={100}>
            <div style={{ maxWidth: '600px', marginInline: 'auto'}}>
                <Formik
                    innerRef={formikRef}
                    initialValues={profileFormInitialValue}
                    onSubmit={handleSubmit}
                    validationSchema={profileFormValidationSchema}
                >
                    {(formik) => (
                        <Form>
                            <Space direction="vertical" size="middle" style={{ display: 'flex', marginInline: '10px' }}>
                                <ImageUploadField 
                                    name={image.name}
                                    label={image.label}
                                />
                                <TextField
                                    name={name.name}
                                    label={name.label}
                                    size='middle'
                                    type='text'
                                />
                                <TextField
                                    name={email.name}
                                    label={email.label}
                                    size='middle'
                                    type='email'
                                />
                                <TextField
                                    name={role.name}
                                    label={role.label}
                                    size='middle'
                                    type='text'
                                />
                                <TextField
                                    name={mobileNumber.name}
                                    label={mobileNumber.label}
                                    size='middle'
                                    type='text'
                                />
                                <TextField
                                    name={alternativeEmail.name}
                                    label={alternativeEmail.label}
                                    size='middle'
                                    type='email'
                                />
                                <Space style={{display:'flex', justifyContent:'end'}}>
                                    <Button type='primary' shape='round' onClick={()=>formik.submitForm()}>Save</Button>
                                    <Button onClick={onClose} shape='round'>Cancel</Button>
                                </Space>
                            </Space>
                        </Form>
                    )}
                </Formik>
            </div>
        </Spin>
    )
}

export default ProfileForm