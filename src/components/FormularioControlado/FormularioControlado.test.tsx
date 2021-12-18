import '@testing-library/jest-dom'
import { render, fireEvent, screen, RenderResult } from '@testing-library/react'
import FormularioControlado from './FormularioControlado';

test('formulario teste', () => {
    const Name : string = 'Teste'
    const Email : string = 'Email@teste.com'

    const result: RenderResult = render(<FormularioControlado />)

    const inputs: HTMLCollectionOf<HTMLInputElement> | null =
        result.container.getElementsByTagName('input');
    expect(inputs.length).toBe(2);

    const NameHTML : HTMLInputElement | null = inputs.item(0)
    fireEvent.change(NameHTML as HTMLInputElement, {
        target : {value : Name}
    })
    expect(NameHTML?.value).toBe(Name)
    const EmailHTML : HTMLInputElement | null = inputs.item(1)
    fireEvent.change(EmailHTML as HTMLInputElement, {
        target : {value : Email}
    })
    expect(EmailHTML?.value).toBe(Email)

})