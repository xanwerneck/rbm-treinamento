
import '@testing-library/jest-dom'
import {render, fireEvent, screen, RenderResult} from '@testing-library/react'
import BtnDelContasReceber from "./BtnDelContasReceber";

/* Package reference : https://github.com/testing-library/jest-dom */


test('do example test', () => {
  
  const result : RenderResult = render(<BtnDelContasReceber/>)
  const buttonResult : HTMLButtonElement | null = result.container.getElementsByTagName('button').item(0);
  expect(buttonResult).not.toBeNull();
  
  
})