import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Date({onChange, selectedDate, label}) {
  return (
    <label className="formElement">
      <span className="formLabel">{label}</span>
      <DatePicker onChange={onChange} selected={selectedDate} />
    </label>
  );
}

export default Date
