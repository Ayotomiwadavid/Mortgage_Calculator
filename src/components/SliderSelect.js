import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        min={1000}
        max={bank_limit}
        defaulValue={data.homeValue}
        value={data.homeValue}
        step={100}
        label="Whole Value"
        unit="$"
        amount={data.homeValue}
        onchange={(e, value) => {
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          });
        }}
      />
      <SliderComponent
        min={0}
        max={data.homeValue}
        defaulValue={data.downPayment}
        value={data.downPayment}
        step={100}
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
        onchange={(e, value) => {
          setData({
            ...data,
            loanAmount: (data.homeValue - value),
            downPayment: value,
          });
        }}
      />
      <SliderComponent
        min={0}
        max={data.homeValue}
        defaulValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        label="Loan Amount"
        unit="$"
        amount={data.loanAmount}
        onchange={(e, value) => {
          setData({
            ...data,
            downPayment: (data.homeValue - value), 
            loanAmount: value,
          });
        }}
      />
      <SliderComponent
        min={2}
        max={18}
        defaulValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        label="Interest Rate"
        unit="%"
        amount={data.interestRate}
        onchange={(e, value) => {
          setData({
            ...data,
            interestRate: value,
          });
        }}
      />
    </>
  );
};

export default SliderSelect;
