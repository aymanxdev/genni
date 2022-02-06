import React, { useState } from "react";
import "./customInput.styles.js";
import { AlertMsg, FormInput, Input, Label } from "./customInput.styles.js";

const CustomInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <FormInput>
      <Label>{label}</Label>
      <Input
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "companyFrom" && setFocus(true)}
        focus={focus.toString()}
        placeholder={inputProps.placeholder}
      />
      <AlertMsg>{errorMessage}</AlertMsg>
    </FormInput>
  );
};

export default CustomInput;
