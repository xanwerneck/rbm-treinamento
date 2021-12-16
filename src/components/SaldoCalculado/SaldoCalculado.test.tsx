import '@testing-library/jest-dom'
import { render, fireEvent, screen, RenderResult } from '@testing-library/react'
import SaldoCalculado from "./SaldoCalculado";

test('saldo calculado teste', () => {
    const result: RenderResult = render(<SaldoCalculado />)

    const resultadoHtml: HTMLElement | null =
        result.container.getElementsByTagName('p').item(0)

    expect(resultadoHtml?.textContent).toBe('1000')

    fireEvent.click(resultadoHtml as HTMLElement)

    expect(resultadoHtml?.textContent).toBe('1001')
})