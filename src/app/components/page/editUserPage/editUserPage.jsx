import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {validator} from '../../../utils/validator'
import api from '../../../api'
import TextField from '../../common/form/textField'
import SelectField from '../../common/form/selectField'
import RadioField from '../../common/form/radioField'
import MultiSelectField from '../../common/form/multiSelectField'
import BackHistoryButton from '../../common/backButton'

const EditUserPage = () => {
  const {userId} = useParams()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    name: '',
    email: '',
    profession: '',
    sex: 'male',
    qualities: []
  })

  const [professions, setProfessions] = useState([])
  const [qualities, setQualities] = useState([])
  const [errors, setErrors] = useState({})

  const getProfessionById = id => {
    for (const prof of professions) {
      if (prof.value === id) {
        return {
          _id: prof.value,
          name: prof.label
        }
      }
    }
  }

  const getQualities = elements => {
    const qualitiesArray = []

    for (const elem of elements) {
      for (const quality in qualities) {
        if (elem.value === qualities[quality].value) {
          qualitiesArray.push({
            _id: qualities[quality].value,
            name: qualities[quality].label,
            color: qualities[quality].color
          })
        }
      }
    }
    return qualitiesArray
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) return

    const {profession, qualities} = data

    api.users.update(userId, {
      ...data,
      profession: getProfessionById(profession),
      qualities: getQualities(qualities)
    })
      .then(data => history.push(`/users/${data._id}`))

    console.log({
      ...data,
      profession: getProfessionById(profession),
      qualities: getQualities(qualities)
    })
  }

  const transformData = data => {
    return data.map(qual => ({label: qual.name, value: qual._id}))
  }

  useEffect(() => {
    setIsLoading(true)
    api.users.getById(userId).then(({profession, qualities, ...data}) =>
      setData(prevState => ({
        ...prevState,
        ...data,
        qualities: transformData(qualities),
        profession: profession._id
      }))
    )

    api.fetchAllProfessions().then(data => {
      const professionsList = Object.keys(data).map(professionName => ({
        label: data[professionName].name,
        value: data[professionName]._id
      }))
      setProfessions(professionsList)
    })

    api.fetchAllQualities().then(data => {
      const qualitiesList = Object.keys(data).map(quality => ({
        value: data[quality]._id,
        label: data[quality].name,
        color: data[quality].color
      }))
      setQualities(qualitiesList)
    })
  }, [])

  useEffect(() => {
    if (data._id) {
      setIsLoading(false)
    }
  }, [data])

  const validatorConfig = {
    email: {
      isRequired: {message: 'Email is required'},
      isEmail: {message: 'Email entered incorrectly'}
    },
    name: {
      isRequired: {message: 'Enter your name'}
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const handleChange = target => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length !== 0
  }

  const isValid = Object.keys(errors).length !== 0

  return (
    <div className="container mt-5">
      <BackHistoryButton/>
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {!isLoading && Object.keys(professions).length > 0
            ? (
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="enter Name"
                />
                <TextField
                  label="E-mail"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="enter Email"
                />
                <SelectField
                  label="Choose your profession"
                  defaultOption="Choose..."
                  options={professions}
                  name="profession"
                  onChange={handleChange}
                  value={data.profession}
                  error={errors.profession}
                />
                <RadioField
                  options={[
                    {name: 'Male', value: 'male'},
                    {name: 'Female', value: 'female'},
                    {name: 'Other', value: 'other'}
                  ]}
                  value={data.sex}
                  name="sex"
                  onChange={handleChange}
                  label="Choose your sex"
                />
                <MultiSelectField
                  defaultValue={data.qualities}
                  qualities={qualities}
                  onChange={handleChange}
                  name="qualities"
                  label="Choose your qualities"
                />
                <button
                  type="submit"
                  disabled={isValid}
                  className="btn btn-primary w-100 mx-auto"
                >
                  Refresh
                </button>
              </form>
            )
            : 'Loading...'
          }
        </div>
      </div>
    </div>
  )
}

export default EditUserPage