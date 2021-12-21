import { useState } from "react"
import './ContasAReceber.css';
import moment from "moment";
import { ContasAReceber } from "../../models/ContasAReceber";
import ControleContasAReceber from "./ControleContasAReceber";

export default function MainContasAReceber() {

    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState(new Date())
    const [planoDeContas, setPlanoDeContas] = useState('')
    const [valor, setValor] = useState(0.0)

    const enviar = (e: React.FormEvent) => {
        e.preventDefault()
        const conta: ContasAReceber = new ContasAReceber(descricao, data, valor, planoDeContas)

        conta.create()
        .then(data => {
            alert('Contas a Receber criado com sucesso')
            setData(new Date())
            setDescricao('')
            setPlanoDeContas('')
            setValor(0)
        })
        .catch(error => {
            alert('Erro ao criar contas a receber')
        })
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
                    Data: <input type='date' value={moment(data).format('YYYY-MM-DD')} name='data'  onChange={(e) => setData(new Date(e.target.value))
                    } />
                </label>
                <label>
                    Planos De Conta: <input type='text' value={planoDeContas}  name='planoDeContas'  onChange={(e) => setPlanoDeContas(e.target.value)} />
                </label>
                <label>
                    Valor: <input type='number' name='valor'  value={valor} onChange={(e) => setValor(parseFloat(e.target.value))}/>
                </label>
                <button name='salvar' type='submit'>
                    Salvar
                </button>
            </form>
            </div>
            <ControleContasAReceber/>
        </>
    )
}