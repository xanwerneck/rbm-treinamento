import '@testing-library/jest-dom'
import { render, fireEvent, screen, RenderResult } from '@testing-library/react'
import SaldoCalculado from "./SaldoCalculado";

test('saldo calculado teste', () => {
    const result: RenderResult = render(<SaldoCalculado />)

    // Resultado
    const resultadoHtml: HTMLElement | null =
        result.container.getElementsByTagName('p').item(0);

    // Input
    const inputHtml: HTMLInputElement | null =
        result.container.getElementsByTagName('input').item(0);
    fireEvent.change(inputHtml as HTMLInputElement, {
        target: {
            value: 1
        }
    })
    expect(resultadoHtml?.textContent).toBe('1')

    // Button
    const buttonHtml: HTMLElement | null =
        result.container.getElementsByTagName('button').item(0);

    fireEvent.click(buttonHtml as HTMLElement)
    expect(resultadoHtml?.textContent).toBe('0')

    fireEvent.click(resultadoHtml as HTMLElement)
    fireEvent.click(resultadoHtml as HTMLElement)
    expect(resultadoHtml?.textContent).toBe('2')
})