import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Alert } from '.'

describe('Alert', () => {
  it('renders with correct message', () => {
    const document = render(<Alert message='banana' />)
    expect(document.getByText('banana')).toBeInTheDocument()
  })
})
