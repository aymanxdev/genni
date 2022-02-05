import React, { useState, useRef } from 'react';


interface ICustomInputProps {
  name: string 
  label: string;
  errorMessage: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  id: string,
  placeholder?: string


}

// /** EXAMPLE 
//      * The input element configuration props.
//      */
//  const inputProps: IInputElementProps = {
//   ...
//   className: inputClasses.join(' '),
//   elementConfig: props.elementConfig,
//   required: props.required || false,
//   value: state.value,
//   valid: state.valid,
//   touched: state.touched,
//   shouldValidate: state.shouldValidate,
//   onChangeHandler: onChangeHandler,
//   style: props.disabled ? { opacity: 0.5, pointerEvents: 'none' } : undefined
// }

const CustomInput = (props: ICustomInputProps) => {

  const [focus, setFocus] = useState(false)
  const {  label, errorMessage, onChange, name,  } = props

const handleFocus = () => {
  setFocus(true)
}
  return <div>
    <label>{label}</label>
    <input 
    
    onChange={onChange}
    onBlur={handleFocus}
    onFocus={()=> name === "title" && setFocus(true)}
    // focus = {focus.toString()}
    
    />
    <span>{errorMessage}</span>
  </div>;
};

export default CustomInput;
