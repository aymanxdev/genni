import React, { useState } from "react";
import CustomInput from "../custom-input/CustomInput";
import { inputs } from "./inputs";

const Invoice = () => {
  const [inputData, setInputData] = useState({
    companyFrom: "",
    billTo: "",
    shipTo: "",
    item: "",
    quantity: 0,
    amount: 0,
    currency: "",
    terms: "",
    total: 0,
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <h1>Generate an Invoice</h1>
        {inputs.map((input) => (
          <CustomInput
            key={input.id}
            {...input}
            value={inputData[input.name]}
            onChange={handleChange}
            placeholder={input.placeholder}
          />
        ))}
        <button>Generate</button>
      </form>
    </div>
  );
};

export default Invoice;
