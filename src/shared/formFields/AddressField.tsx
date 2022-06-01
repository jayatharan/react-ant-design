import React from 'react';
import { Text } from '../Typograpgy';
import TextField from './TextField';

interface AddressFieldProps {
    label: string;
    name: string;
    disabled?: boolean;
    size?: 'large' | 'middle' | 'small';
    type?: 'number' | 'password' | 'email' | 'text' | 'url',
    style?: React.CSSProperties
}

const AddressField = ({ label, name, disabled, size, type, style }: AddressFieldProps) => {

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
                type={type}
                style={{ display: 'none' }}
            />
            <TextField
                label="Address"
                name={`${name}.address`}
                disabled={disabled}
                size={size}
                type={type}
            />
            <TextField
                label="City"
                name={`${name}.city`}
                disabled={disabled}
                size={size}
                type={type}
            />
            <TextField
                label="Country"
                name={`${name}.country`}
                disabled={disabled}
                size={size}
                type={type}
            />
            <TextField
                label="Postcode"
                name={`${name}.postCode`}
                disabled={disabled}
                size={size}
                type={type}
            />
        </div>
    )
}

export default AddressField