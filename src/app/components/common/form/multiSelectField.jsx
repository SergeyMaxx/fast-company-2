import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const MultiSelectField = ({qualities, onChange, name, label, defaultValue}) => {
  const qualitiesArray = !Array.isArray(qualities) && typeof qualities === 'object'
    ? Object.values(qualities)
    : qualities

  const handleChange = value => {
    onChange({name: name, value})
  }

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        defaultValue={defaultValue}
        options={qualitiesArray}
        className="basis-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  )
}

MultiSelectField.propTypes = {
  qualities: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.array
}

export default MultiSelectField