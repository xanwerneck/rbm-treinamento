
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import ContasAPagar from "./ContasAPagar";

/* Package reference : https://github.com/testing-library/jest-dom */

test('check contas a pagar contains value', () => {
  render(<ContasAPagar />)

  expect(screen.queryByText('Usuario logado:')).toBeInTheDocument()
})