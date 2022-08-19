import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({
                       label,
                       value,
                       onChange,
                       defaultOption,
                       professions,
                       error,
                       name,
                     }) => {

  const handleChange = ({target}) => {
    onChange({name: target.name, value: target.value})
  }

  const professionsArray = !Array.isArray(professions) && typeof professions === 'object'
    ? Object.values(professions)
    : professions

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className={'form-select' + (error ? ' is-invalid' : '')}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {professionsArray.length > 0 && professionsArray.map(profession => (
          <option key={profession.value} value={profession.value}>
            {profession.label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

SelectField.propTypes = {
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  professions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string
}

export default SelectField