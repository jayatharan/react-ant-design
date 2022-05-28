import React from 'react'
import {Button, Upload} from 'antd';
import { Text } from '../Typograpgy';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

interface FileUploadFieldProps {
    label?:string;
    style?: React.CSSProperties;
    uploadProps?:UploadProps;
    children?:any;
}

const FileUploadField = ({label, style, uploadProps, children}:FileUploadFieldProps) => {
  return (
    <div style={style}>
        <Text
            strong={true} 
        >
            {label?label:'File Upload'}
        </Text>
        <div>
            <Upload {...uploadProps}>
                {children}
            </Upload>
        </div>
    </div>
  )
}

export default FileUploadField