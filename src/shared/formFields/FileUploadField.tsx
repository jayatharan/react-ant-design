import React from 'react'
import {Upload} from 'antd';
import { Text } from '../Typograpgy';

interface FileUploadFieldProps {
    label?:string;
    name?:string;
    disabled?:boolean;
    style?: React.CSSProperties;
}

const FileUploadField = ({label, name, disabled, style}:FileUploadFieldProps) => {
  return (
    <div style={style}>
        <Text
            style={{fontSize:'1.1rem'}} 
            strong={true} 
            disabled={disabled}
        >
            {label?label:'File Upload'}
        </Text>
        <Upload />
    </div>
  )
}

export default FileUploadField