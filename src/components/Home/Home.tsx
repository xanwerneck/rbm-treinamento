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
                Esta é a tela que será utilizada para os exercícios ao longo do treinamento. Abaixo dessa tag faça a inserção dos seus componentes...
            </p>
            <hr />
            <AddContasAPagar />
        </div>
    )
}