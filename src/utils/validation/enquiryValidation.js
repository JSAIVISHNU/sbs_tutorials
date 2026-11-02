const PHONE_REGEX = /^[0-9]{10}$/
const MAX_LENGTHS = {
  parentName: 100,
  phone: 10,
  studentClass: 50,
  course: 100,
  message: 500,
}

export function validateEnquiry(values) {
  const errors = {}

  if (!values.parentName || !values.parentName.trim()) {
    errors.parentName = 'Parent name is required.'
  } else if (values.parentName.trim().length > MAX_LENGTHS.parentName) {
    errors.parentName = `Parent name must be at most ${MAX_LENGTHS.parentName} characters.`
  }

  if (!values.phone || !values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = 'Phone number must be 10 digits.'
  }

  if (!values.course || !values.course.trim()) {
    errors.course = 'Course is required.'
  } else if (values.course.trim().length > MAX_LENGTHS.course) {
    errors.course = `Course must be at most ${MAX_LENGTHS.course} characters.`
  }

  if (values.studentClass && values.studentClass.trim().length > MAX_LENGTHS.studentClass) {
    errors.studentClass = `Class must be at most ${MAX_LENGTHS.studentClass} characters.`
  }

  if (values.message && values.message.trim().length > MAX_LENGTHS.message) {
    errors.message = `Message must be at most ${MAX_LENGTHS.message} characters.`
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
