import React, { Fragment, useState } from 'react'

const Form = (props) => {
  const initialState = {
    name: ''
  }
  const [fields, setFields] = useState(initialState)

  const handleFieldsChange = event => setFields({
    ...fields,
    [event.currentTarget.name]: event.currentTarget.value
  });

  const handleSubmit = event => {
    props.addSatellite(fields)
    event.preventDefault()
    setFields(initialState)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange} />
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </Fragment>
  )
}

export default Form;