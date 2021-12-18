export default function AddPlanoConta() {
    
    // const [seguraDados, attDados] = useState(['',0,'']);

    return(
        <div>
            <p>
                Adicionar Plano de Conta
            </p>
            <input type = "text" title='Digite o Código da Conta'></input>

            <br></br><br></br><br></br>

            <input type = "text" title='Digite o Nome da Conta'></input>

            <input type = "text" title='Digite o Tipo da Conta'></input>

            <br></br><br></br><br></br>

            <input type = "button">Adicionar</input>

        </div>

    )
}