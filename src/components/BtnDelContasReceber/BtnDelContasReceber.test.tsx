
import '@testing-library/jest-dom'
import {render, fireEvent, screen, RenderResult} from '@testing-library/react'
import { ContasAReceber } from '../../models/ContasAReceber';
import BtnDelContasReceber from "./BtnDelContasReceber";

test('do example test', () => {
  
  const result : RenderResult = render(<BtnDelContasReceber contas={new ContasAReceber('', new Date(), 0, '')}/>)
  const buttonResult : HTMLButtonElement | null = result.container.getElementsByTagName('button').item(0);
  expect(buttonResult).not.toBeNull();
  
  
})