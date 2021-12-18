import '@testing-library/jest-dom'
import { render, fireEvent, screen, RenderResult } from '@testing-library/react'
import Formulario from './Formulario';

test('formulario teste', () => {
    const Name : string = 'Teste'
    const Email : string = 'Email@teste.com'

    const result: RenderResult = render(<Formulario />)

    const form: HTMLFormElement | null =
        result.container.querySelector('form');
    expect(form).not.toBeNull()

    const inputs: HTMLCollectionOf<HTMLInputElement> | null =
        result.container.getElementsByTagName('input');
    expect(inputs.length).toBe(3);

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

    fireEvent.submit(form as HTMLFormElement)

    expect(EmailHTML?.value).toBe("")
    expect(NameHTML?.value).toBe("")

})