import React, {useEffect, useState} from 'react'
import {validator} from '../../utils/validator'
import TextField from '../common/form/textField'
import {useAuth} from '../../hooks/useAuth'
import {useHistory} from 'react-router-dom'

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    stayOn: false
  })

  const history = useHistory()
  const {login} = useAuth()
  const [errors, setErrors] = useState({})
  const [enterError, setEnterError] = useState(null)

  const handleChange = target => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
    setEnterError(null)
  }

  const validatorConfig = {
    email: {
      isRequired: {message: 'E-mail is required'},
    },
    password: {
      isRequired: {message: 'Password is required'},
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length !== 0
  }

  const isValid = Object.keys(errors).length !== 0

  const handleSubmit = async e => {
    e.preventDefault()
    if (validate()) return

    try {
      await login(data)
      history.push(
        history.location.state
          ? history.location.state.from.pathname
          : '/'
      )

    } catch (error) {
      setEnterError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="E-mail"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="enter Email"
        error={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="enter password"
        error={errors.password}
      />
      {enterError && <p className="text-danger">{enterError}</p>}
      <button
        type="submit"
        disabled={isValid || enterError}
        className="btn btn-primary w-100 mx-auto"
      >
        Submit
      </button>
    </form>
  )
}

export default LoginForm