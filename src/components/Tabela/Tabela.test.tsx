import '@testing-library/jest-dom'
import { render, fireEvent, screen, RenderResult } from '@testing-library/react'
import Tabela from "./Tabela";

test('tabela teste', () => {
    const usersn : Number = 20
    const result: RenderResult = render(<Tabela nUsers={usersn} />)

    const tableHtml: HTMLTableElement | null =
        result.container.querySelector('table');
    expect(tableHtml).not.toBeNull();

    // Tbody
    const resultadoHtml: HTMLTableSectionElement | null | undefined =
    tableHtml?.tBodies.item(0)

    // Check number of the rows
    const Trs : HTMLCollectionOf<HTMLTableRowElement> | undefined = resultadoHtml?.rows
    expect(Trs?.length).toBe(usersn)

})