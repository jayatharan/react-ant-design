import React from 'react';
import { useField } from 'formik';
import Textbox from '../Textbox';
import {Text, Title} from '../Typograpgy';

interface TextFiledProps {
    label:string;
    name:string;
    disabled?:boolean;
    size?:'large' | 'middle' | 'small';
    type?:'number' | 'password' | 'email' | 'text' | 'url',
    style?: React.CSSProperties
}

const TextField = ({label, name, disabled, size, type, style}:TextFiledProps) => {
    const [field, meta, helper] = useField(name);
    const {setValue, setTouched} = helper;

    const isError = () => {
        if(meta.touched && meta.error) return true;
        return false;
    }

    const renderHelperText = ()=>{
        if(meta.error) {
            return (meta.error);
        }
    }

    return (
        <div style={style}>
            <Text 
                style={{fontSize:'1.1rem', paddingBottom:'5px'}} 
                strong={true} 
                disabled={disabled}
            >
                {label}
            </Text>
            {type == 'password'?(
                <Textbox.Password
                    {...field} 
                    disabled={disabled}
                    size={size}
                    type={type}
                />
            ):(
                <Textbox
                    {...field} 
                    disabled={disabled}
                    size={size}
                    type={type}
                />
            )}
            {isError()&&(
                <Text type="danger">{renderHelperText()}</Text>
            )}
        </div>
        
    )
}

export default TextField