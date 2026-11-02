import { describe, it, expect } from 'vitest'
import { validateEnquiry } from '../utils/validation/enquiryValidation.js'

describe('validateEnquiry', () => {
  it('returns valid for a complete enquiry', () => {
    const result = validateEnquiry({
      parentName: 'Jane Doe',
      phone: '9876543210',
      studentClass: '5th',
      course: 'School Tuition',
      message: 'Hello',
    })
    expect(result.isValid).toBe(true)
    expect(result.errors).toEqual({})
  })

  it('requires parent name', () => {
    const result = validateEnquiry({ parentName: '', phone: '9876543210', course: 'Music' })
    expect(result.isValid).toBe(false)
    expect(result.errors.parentName).toBeDefined()
  })

  it('requires a 10 digit phone', () => {
    const result = validateEnquiry({ parentName: 'Jane', phone: '123', course: 'Music' })
    expect(result.isValid).toBe(false)
    expect(result.errors.phone).toBeDefined()
  })

  it('requires course', () => {
    const result = validateEnquiry({ parentName: 'Jane', phone: '9876543210', course: '' })
    expect(result.isValid).toBe(false)
    expect(result.errors.course).toBeDefined()
  })

  it('enforces max lengths', () => {
    const result = validateEnquiry({
      parentName: 'a'.repeat(101),
      phone: '9876543210',
      course: 'Music',
    })
    expect(result.isValid).toBe(false)
    expect(result.errors.parentName).toBeDefined()
  })
})
