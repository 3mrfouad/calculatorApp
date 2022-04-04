import { render, screen } from '@testing-library/react'
import App from './App'

test('renders clear button', () => {
  render(<App />)
  const clearBtn = screen.getByText(/AC/i)
  expect(clearBtn).toBeInTheDocument()
})
