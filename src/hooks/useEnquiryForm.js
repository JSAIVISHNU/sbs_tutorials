import { useState } from 'react'
import { validateEnquiry } from '../utils/validation/enquiryValidation.js'
import { submitEnquiry } from '../services/supabase/enquiries.js'
import { toUserMessage, logError } from '../utils/helpers/errors.js'

const INITIAL_VALUES = {
  parentName: '',
  phone: '',
  studentClass: '',
  course: '',
  message: '',
}

export function useEnquiryForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    if (event) event.preventDefault()

    const result = validateEnquiry(values)
    setErrors(result.errors)
    if (!result.isValid) return false

    setStatus('submitting')
    setErrorMessage('')

    const { error } = await submitEnquiry(values)
    if (error) {
      logError('useEnquiryForm', error)
      setStatus('error')
      setErrorMessage(toUserMessage(error))
      return false
    }

    setStatus('success')
    setValues(INITIAL_VALUES)
    return true
  }

  function reset() {
    setValues(INITIAL_VALUES)
    setErrors({})
    setStatus('idle')
    setErrorMessage('')
  }

  return {
    values,
    errors,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
    reset,
  }
}
