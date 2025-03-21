import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Date({onChange, selectedDate, label, minDate, name}) {
  return (
    <label className="formElement">
      <span className="formLabel">{label}</span>
      <DatePicker
        onChange={onChange}
        minDate={minDate}
        selected={selectedDate}
        name={name}
      />
    </label>
  );
}

export default Date
