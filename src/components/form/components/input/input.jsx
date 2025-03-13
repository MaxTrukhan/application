import React, {useState} from 'react'

function Input({ name, value, onChange, label, editable = true}) {
    const [error, setError] = useState('')
    const onChangeHandler = (e) => {
        
        if (e.target.value.length > 250) setError({ [name]: "to long" });
        onChange(e)
    }
  return (
    <div>
      <label className="formElement">
        <span className="formLabel">{label}</span>
        {editable ? (
          <input onChange={(e) => onChangeHandler(e)} value={value} name={name} />
        ) : (
          value
        )}

        {error && <span style={{ marginLeft: "10px" }}>{error}</span>}
      </label>
    </div>
  );
}

export default Input
