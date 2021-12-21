
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import ContasAReceber from "./ContasAReceber";

/* Package reference : https://github.com/testing-library/jest-dom */

test('check contas a pagar contains value', () => {
  render(<ContasAReceber />)

  expect(screen.queryByText('Usuario logado:')).toBeInTheDocument()
})