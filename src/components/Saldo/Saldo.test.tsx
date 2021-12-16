import '@testing-library/jest-dom'
import { render, fireEvent, screen, RenderResult } from '@testing-library/react'
import Saldo from "./Saldo";

/* Package reference : https://github.com/testing-library/jest-dom */


test('do example test', () => {

    const result: RenderResult = render(<Saldo />)


    const resultadoHtml: HTMLElement | null =
        result.container.getElementsByTagName('div').item(0);

    expect(resultadoHtml).not.toBeNull();
    expect(resultadoHtml?.textContent).toBe('Saldo R$ 1100,00');

})