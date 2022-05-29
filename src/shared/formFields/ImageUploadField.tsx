import React, { useState } from 'react'
import { Text } from '../Typograpgy';
import { useField } from 'formik';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import type { UploadChangeParam } from 'antd/es/upload';
import { getImagePath } from '../../utils/ImageProcess';

import { Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { FileResponse } from '../../application/models/BaseModels';
import { FILE_UPLOAD_ROUTE } from '../../application/constants/AppRoutes';

interface ImageUploadProps {
    name: string;
    label: string;
    style?: React.CSSProperties
    disabled?: boolean;
}

const ImageUploadField = ({ name, style, disabled, label }: ImageUploadProps) => {
    const [loading, setLoading] = useState(false);
    const [field, meta, helper] = useField(name);

    const getBase64 = (img: RcFile, callback: (url: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
    };

    const beforeUpload = (file: RcFile) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            helper.setError('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            helper.setError('You can only upload JPG/PNG file!');
        }
        return isJpgOrPng && isLt2M;
    };

    const isError = () => {
        if (meta.touched && meta.error) return true;
        return false;
    }

    const renderHelperText = () => {
        if (meta.error) {
            return (meta.error);
        }
    }

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            const response = info.file.response as FileResponse;
            helper.setValue(response.path);
            getBase64(info.file.originFileObj as RcFile, url => {
                setLoading(false);
            });
        }
    };

    return (
        <div style={style}>
            <Text
                strong={true}
                disabled={disabled}
            >
                {label}
            </Text>
            <Upload
                name="file"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={FILE_UPLOAD_ROUTE}
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {field.value ? <img src={`${getImagePath(field.value)}`} alt="avatar" style={{ width: '100%' }} /> : (
                    <div>
                        {loading ? <LoadingOutlined /> : <PlusOutlined />}
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                )}
            </Upload>
            {isError()&&(
                <small>
                    <Text type="danger">{renderHelperText()}</Text>
                </small>
            )}
        </div>
    )
}

export default ImageUploadField