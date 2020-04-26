import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';  
import InputMask from 'react-input-mask';
import DatePicker from 'react-datepicker';

import s from './FormControls.module.scss';

let IsStructuralSubdivisionData = [{'value': false, 'text': 'Нет'}, {'value': true, 'text': 'Да'}];

const FormControl = FormControl => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;  
    return (
        <div className={s.inputForm + ' ' + (hasError ? s.error : '')}> 
            <FormControl {...input} {...props}  /> 
            { hasError && <div className={s.errorInfo}>{ meta.error }</div> } 
        </div>
    )
}

const Select = (props) => { 
    return <Form.Control {...props} as="select">
                {props.massobject.map((item, index)=>(
                    <option key={index} value={item.value}>{item.text}</option>
                ))} 
            </Form.Control> 
};

export const InputDatePicker = ({ input: { onChange, className }, meta, ...props}) => {
    const [date, setDate] = useState(null);
    const handleChange = data => setDate(data); 
    const hasError = meta.touched && meta.error; 
    return ( 
        <div className={s.inputForm + ' ' + (hasError ? s.error : '')}> 
            <DatePicker className={className} {...props} placeholderText='дд.мм.гггг' dateFormat="dd.MM.yyyy" 
                selected={date} onChange={ (event)=>{ onChange(event); handleChange(event); } } />
            { hasError && <div className={s.errorInfo}>{ meta.error }</div> } 
        </div>
    )
}

export const Textaria = FormControl((props) => { return <Form.Control as="textarea" {...props} /> });
export const Input = FormControl((props) => { return <Form.Control {...props} /> });
export const DownloadFile = FormControl((props) => { return <Form.File.Input {...props} /> });
export const PhoneInput = FormControl((props) => { return <InputMask {...props} mask="+7(999)-999-99-99" maskChar=" " /> });
export const SnilsInput = FormControl((props) => { return <InputMask {...props} mask="999-999-999-99" maskChar=" " /> });
export const InnInput = FormControl((props) => { return <InputMask {...props} mask="999-999-999-999" maskChar=" " /> });
export const KppInput = FormControl((props) => { return <InputMask {...props} mask="999-999-999" maskChar=" " /> });
export const OgrnInput = FormControl((props) => { return <InputMask {...props} mask="9999999999999" maskChar=" " /> });
export const OkatoInput = FormControl((props) => { return <InputMask {...props} mask="99999999999" maskChar=" " /> });
export const OktmoInput = FormControl((props) => { return <InputMask {...props} mask="99999999999" maskChar=" " /> });
export const IsStructuralSubdivision = FormControl((props) => { return <Select {...props} massobject={IsStructuralSubdivisionData} /> });
export const FormSelect = (massObject) => FormControl((props) => { return <Select {...props} massobject={massObject} /> });
