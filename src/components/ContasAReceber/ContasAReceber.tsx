import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../helpers/UserContext"

import { setContasAReceberStore } from "../../models/firestore/ContasAReceverStore";
import ContasAReceber from "../../models/ContasAReceber";
import './ContasAReceber.css';

export default function MainContasAReceber() {

    const [contas, setContas] = useState(new Array<ContasAReceber>())

    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState(new Date())
    const [status, setStatus] = useState(Boolean)
    const [planoDeContas, setPlanoDeContas] = useState('')
    const [valor, setValor] = useState(0.0)

    const enviar = (e: React.FormEvent) => {
        e.preventDefault()
        const conta: ContasAReceber = new ContasAReceber(descricao, data, status, planoDeContas, valor)

        setContasAReceberStore(
            new ContasAReceber(descricao, data, status, planoDeContas, valor)
        )

        setContas([...contas, conta])
        setData(new Date())
        setDescricao('')
        setStatus(Boolean)
        setPlanoDeContas('')
        setValor(0)

        console.log(contas);
    }


    return (
        <>
            <div id="tela">
            <h2>Contas a Receber</h2>
            <form id='formulario' onSubmit={(e: React.FormEvent) => enviar(e)}>
                <label>
                    Descrição: <input type='text' value={descricao} name='descricao' onChange={(e) => setDescricao(e.target.value)} />
                </label>
                <label>
                    Data: <input type='date' value={data.toString()} name='data'  onChange={(e) => setData(new Date(e.target.value))} />
                </label>
                <label>
                    Status: <input type='checkbox'  checked={status} name='status'  onChange={(e) => setStatus(!status)} />
                </label>
                <label>
                    Planos De Conta: <input type='text' value={planoDeContas}  name='planoDeContas'  onChange={(e) => setPlanoDeContas(e.target.value)} />
                </label>
                <label>
                    Valor: <input type='text' name='valor'  value={valor} onChange={(e) => setValor(parseFloat(e.target.value))}/>
                </label>

                <button name='salvar' type='submit'>
                    Salvar
                </button>

            </form>
            </div>
        </>
    )
}