import { useState } from "react";
import { setPlanoDeContas, getPlanoDeContas } from "../../models/firestore/PlanoDeContasStore";
import PlanoDeContas from "../../models/PlanoDeContas"

export default function AddPlanoConta() {
    
    // const [seguraDados, attDados] = useState(['',0,'']);
    
    function funcao1()
    {
        alert("Plano de Conta adicionado com Sucesso!")
    }
    const [seguraCod, attCod] = useState('');
    const [seguraConta, attConta] = useState('');
    const [seguraStatus, attStatus] = useState(false);

    const opcao = [{value : true, label : "True"},{value : false, label : "False"}]

    const atualiza = () => {
        setPlanoDeContas(new PlanoDeContas(seguraConta, seguraCod, seguraStatus));
        console.log(getPlanoDeContas());
        alert('Plano de Conta adicionado com Sucesso!');
    }

    return(
        <div>
            <label>Código da Conta</label>
            <br></br>
            <input type = "text" name="EditCodigo" value={seguraCod} onChange={(e)=>attCod(e.target.value)} placeholder='Digite o Código da Conta'></input>

            <br></br><br></br>
            <label>Nome da Conta</label>
            <br></br>
            <input type = "text" name="EditNome" value={seguraConta} onChange={(e)=>attConta(e.target.value)} placeholder='Digite o Nome da Conta'></input>

            <br></br><br></br>
            <label>Status da Conta</label>
            <br></br>
            <select name="select" onChange={(e)=>{attStatus(e.target.value == '1' ? true : false)}}>
                <option value="1" selected>True</option>
                <option value="2">False</option>
            </select>
            {/* <input type = "text" placeholder='Digite o Tipo da Conta'></input> */}

            <br></br><br></br>

            <input type = "button" onClick={atualiza} value={"              Adicionar              "}/>

        </div>

    )
}