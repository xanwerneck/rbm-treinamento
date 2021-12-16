
import '@testing-library/jest-dom'
import {render, fireEvent, screen, RenderResult} from '@testing-library/react'
import Example from "./Example";

/* Package reference : https://github.com/testing-library/jest-dom */


test('do example test', () => {
  
  const result : RenderResult = render(<Example message={'1000'} />)
  const h1Result : HTMLHeadingElement | null = result.container.getElementsByTagName('h1').item(0);
  expect(h1Result).not.toBeNull();
  expect(h1Result?.textContent).toBe('1000');
  
})


/*
test('do example test', () => {

  const result : RenderResult = render(<Example />)
  const h1Result : HTMLHeadingElement | null = result.container.getElementsByTagName('h1').item(0);
  expect(h1Result).not.toBeNull();
  expect(h1Result?.textContent).toBe('Valor do saldo: 1000');

  fireEvent.click(h1Result as HTMLElement);
  expect(h1Result?.textContent).toBe('Valor do saldo: 1001');
  
})
*/

/*
test('do example test', () => {

  const result : RenderResult = render(<Example />)
  const h1Result : HTMLHeadingElement | null = result.container.getElementsByTagName('h1').item(0);
  expect(h1Result).not.toBeNull();
  expect(h1Result?.textContent).toBe('Valor do saldo: 1000');

  const inputResult : HTMLInputElement | null = result.container.getElementsByTagName('input').item(0);
  fireEvent.change(inputResult as HTMLInputElement, {target : {value: '100'}});
  expect(h1Result?.textContent).toBe('Valor do saldo: 100');

  fireEvent.click(h1Result as HTMLElement);
  expect(h1Result?.textContent).toBe('Valor do saldo: 101');

  const buttonResult : HTMLButtonElement | null = result.container.getElementsByTagName('button').item(0);
  fireEvent.click(buttonResult as HTMLElement);
  expect(h1Result?.textContent).toBe('Valor do saldo: 0');
  
})
*/