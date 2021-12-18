import { useState } from "react";
import { setPlanoDeContas } from "../../models/firestore/PlanoDeContasStore";
import { IPlanoDeContas } from "../../models/interfaces/IPlanoDeContas";

export default function AddPlanoConta() {
    
    const [seguraCod, attCod] = useState('');
    const [seguraConta, attConta] = useState('');
    const [seguraStatus, attStatus] = useState(false);

    const atualiza = () => {
      
    }

    return(
        <div>
            <p>
                Adicionar Plano de Conta
            </p>
            <input type = "text" value={seguraCod} title='Digite o Código da Conta' />

            <br></br><br></br><br></br>

            <input type = "text" value={seguraConta} title='Digite o Nome da Conta' />

            <input type = "text"  title='Digite o Tipo da Conta'></input>

            <br></br><br></br><br></br>

            <input type = "button">Adicionar</input>

        </div>

    )
}