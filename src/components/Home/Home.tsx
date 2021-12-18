import { useEffect } from "react"
import { setPlanoDeContas } from "../../models/firestore/PlanoDeContasStore"
import PlanoDeContas from "../../models/PlanoDeContas"
import ContasAReceber from "../ContasAReceber/ContasAReceber"
import DashQuadros from "../Dashboard/Dashboard"

export default function Home(){
    useEffect(
        () => {

        }, []
    )
    return (
        <div>
            <p>
                Esta é a tela que será utilizada para os exercícios ao longo do treinamento. Abaixo dessa tag faça a inserção dos seus componentes...
            </p>
            <ContasAReceber/>
            <DashQuadros />
            <hr />
        </div>
    )
}