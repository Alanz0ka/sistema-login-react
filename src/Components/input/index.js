import React from 'react'
import { InputCustomizado } from './styles';

const Input = ({
    name,
    placeholder,
    onChange,
    type,
    error,
    value,
}) => {
    return ( 
<>
<InputCustomizado
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            error={error}
            value={value || ''}

        />
</>
     );
}
 
export default Input;