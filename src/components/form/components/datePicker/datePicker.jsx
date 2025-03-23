import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateComponent = ({onChange, selectedDate, label, name, minDate }) => {
  // console.log(onChange);
  return (
    <label className="formElement">
      <span className="formLabel">{label}</span>
      <DatePicker
        onChange={onChange}
        selected={selectedDate}
        name={name}
        minDate={minDate}
      />
    </label>
  );
};

export default DateComponent;
