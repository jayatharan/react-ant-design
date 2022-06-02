import React from 'react'
import { Text } from '../Typograpgy';
import AddressField from './AddressField';
import TextField from './TextField';

interface CompanyFieldProps {
    label: string;
    name: string;
    disabled?: boolean;
    size?: 'large' | 'middle' | 'small';
    type?: 'number' | 'password' | 'email' | 'text' | 'url',
    style?: React.CSSProperties
}

const CompanyField = ({ label, name, disabled, size, type, style }: CompanyFieldProps) => {
    return (
        <div style={style}>
            <Text
                style={{fontSize:'1.1rem'}}
                strong={true}
                disabled={disabled}
            >
                {label}
            </Text>
            <TextField
                label="id"
                name={`${name}.id`}
                disabled={disabled}
                size={size}
                type='text'
                style={{ display: 'none' }}
            />
            <TextField
                label="Name"
                name={`${name}.name`}
                disabled={disabled}
                size={size}
                type='text'
            />
            <TextField
                label="Description"
                name={`${name}.description`}
                disabled={disabled}
                size={size}
                type='text'
            />
            <AddressField
                label=''
                name={`${name}.address`}
                disabled={disabled}
                size={size}
                type='text'
            />
        </div>
    )
}

export default CompanyField