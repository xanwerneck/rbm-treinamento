import { useEffect } from "react"
import { setPlanoDeContas } from "../../models/firestore/PlanoDeContasStore"
import PlanoDeContas from "../../models/PlanoDeContas"
import BtnDelContasReceber from "../BtnDelContasReceber/BtnDelContasReceber";
import Receitas from "../Receitas/Receitas";

export default function Home(){
    useEffect(
        () => {
            setPlanoDeContas(
                new PlanoDeContas('teste', 'teste', true)
            )
        }, []
    )
    return (
        <div>   
        <div>
            <Receitas />
        </div>
        
        </div>

    )
}