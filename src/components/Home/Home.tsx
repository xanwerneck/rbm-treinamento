import { useEffect } from "react"
import { setPlanoDeContas } from "../../models/firestore/PlanoDeContasStore"
import PlanoDeContas from "../../models/PlanoDeContas"
import AddContasAPagar from "../AddContasAPagar"

export default function Home() {
    useEffect(
        () => {
            setPlanoDeContas(
                new PlanoDeContas('teste', 'teste', true)
            )
        }, []
    )
    return (
        <div>
            <p>
                <b>Consulta Saldo do Usuário</b>
            </p>
            <hr />
            <AddContasAPagar />
        </div>
    )
}