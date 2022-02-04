import React, { useState } from 'react';


interface ICustomInputProps {
  label: string;
  errorMessage: string;
  onChange: string

 
  id: string
}

const CustomInput = (props: ICustomInputProps) => {
  const [focus, setFocus] =
    useState(false)

  return <div></div>;
};

export default CustomInput;
