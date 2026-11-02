import { useEnquiryForm } from '../../hooks/useEnquiryForm.js'
import { Button } from '../common/Button.jsx'
import { Input } from '../common/Input.jsx'

export function EnquiryForm() {
  const { values, errors, status, errorMessage, handleChange, handleSubmit } = useEnquiryForm()

  if (status === 'success') {
    return <p className="text-sm text-green-600">Enquiry submitted successfully.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <Input
        label="Parent Name"
        name="parentName"
        value={values.parentName}
        onChange={handleChange}
        error={errors.parentName}
        required
      />
      <Input
        label="Phone"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        error={errors.phone}
        required
      />
      <Input
        label="Student Class"
        name="studentClass"
        value={values.studentClass}
        onChange={handleChange}
        error={errors.studentClass}
      />
      <Input
        label="Course"
        name="course"
        value={values.course}
        onChange={handleChange}
        error={errors.course}
        required
      />
      <Input
        label="Message"
        name="message"
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />
      {status === 'error' ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
      </Button>
    </form>
  )
}
