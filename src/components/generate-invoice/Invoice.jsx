import React, { useState } from "react";
import CustomInput from "../custom-input/CustomInput";
import { inputs } from "./inputs";
import "./invoice.styles.css";

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
    <div className="invoice__container">
      <div className="invoice__wrapper">
        <h1>Generate an Invoice</h1>
        <form className="invoice__form">
          <div className="col1">
            {inputs
              .map((input) => (
                <CustomInput
                  key={input.id}
                  {...input}
                  value={inputData[input.name]}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                />
              ))
              .slice(0, 4)}
          </div>
          <div className="col2">
            {inputs
              .map((input) => (
                <CustomInput
                  key={input.id}
                  {...input}
                  value={inputData[input.name]}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                />
              ))
              .slice(5, 9)}
          </div>
          <button className="btn">Generate</button>
        </form>
      </div>
    </div>
  );
};

export default Invoice;
