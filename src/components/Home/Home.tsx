import { useEffect } from "react"
import { setPlanoDeContas } from "../../models/firestore/PlanoDeContasStore"
import PlanoDeContas from "../../models/PlanoDeContas"
import Receitas from "../Receitas/Receitas";

export default function Home(){
    return (
        <div>
            <Receitas />
        </div>
    )
}