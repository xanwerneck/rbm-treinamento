import { useState } from "react";
import PlanoDeContas from "../../models/PlanoDeContas"
import { Link } from "react-router-dom";

const style = {
  backgrouncolor: '#005500',
  padding: 20,
  borderRadius: 5
}

export default function AddPlanoConta() 
{
    const [seguraCod, attCod] = useState('');
    const [seguraConta, attConta] = useState('');

    const atualiza = () => {
        const plano : PlanoDeContas = new PlanoDeContas(seguraConta, seguraCod)
        plano.create()
        .then(data => alert('Plano de conta adicionado com sucesso'))
        .catch(error => alert('Erro ao adicionar o plano de contas'))
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

            <button onClick={atualiza}>
                Adicionar
            </button>
            <label style={style}>
              <Link to={'/'}> Voltar para a Home </Link>
            </label>
        </div>

    )
}