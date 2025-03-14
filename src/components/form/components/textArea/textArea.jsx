import React, {useState} from 'react'

function TextArea({ onChange, name }) {
      const [error, setError] = useState('')
    const onChangeHandler = (e) => {
        if (e.target.value.length >= 1000) setError({ [name]: 'to long' }) 
        onChange()
    }
    return (
      <label className="formElement">
        <span className="formLabel">Description</span>
        <textarea
          onChange={(e) => onChangeHandler(e)}
          name={name}
          rows="10"
          cols="50"
        />
        {error && <span style={{ marginLeft: "10px" }}>{error}</span>}
      </label>
    ); 
}

export default TextArea
