import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { EnquiryForm } from '../components/forms/EnquiryForm.jsx'

vi.mock('../services/supabase/enquiries.js', () => ({
  submitEnquiry: vi.fn(),
}))

import { submitEnquiry } from '../services/supabase/enquiries.js'

describe('EnquiryForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows validation errors when submitting empty form', async () => {
    render(<EnquiryForm />)
    fireEvent.click(screen.getByRole('button', { name: /submit enquiry/i }))
    await waitFor(() => {
      expect(screen.getByText(/parent name is required/i)).toBeInTheDocument()
    })
  })

  it('submits successfully', async () => {
    submitEnquiry.mockResolvedValue({ data: { id: '1' }, error: null })
    render(<EnquiryForm />)

    fireEvent.change(screen.getByLabelText(/parent name/i), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '9876543210' } })
    fireEvent.change(screen.getByLabelText(/course/i), { target: { value: 'Music' } })
    fireEvent.click(screen.getByRole('button', { name: /submit enquiry/i }))

    await waitFor(() => {
      expect(screen.getByText(/submitted successfully/i)).toBeInTheDocument()
    })
    expect(submitEnquiry).toHaveBeenCalled()
  })

  it('shows error message on failure', async () => {
    submitEnquiry.mockResolvedValue({ data: null, error: new Error('fail') })
    render(<EnquiryForm />)

    fireEvent.change(screen.getByLabelText(/parent name/i), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '9876543210' } })
    fireEvent.change(screen.getByLabelText(/course/i), { target: { value: 'Music' } })
    fireEvent.click(screen.getByRole('button', { name: /submit enquiry/i }))

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })
})
