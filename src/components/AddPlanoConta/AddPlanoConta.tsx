export default function AddPlanoConta() {
    
    // const [seguraDados, attDados] = useState(['',0,'']);
    
    function funcao1()
    {
        alert("Plano de Conta adicionado com Sucesso!")
    }
    
    return(
        <div>
            <label>Código da Conta</label>
            <br></br>
            <input type = "text" name="EditCodigo" placeholder='Digite o Código da Conta'></input>

            <br></br><br></br>
            <label>Nome da Conta</label>
            <br></br>
            <input type = "text" name="EditNome" placeholder='Digite o Nome da Conta'></input>

            <br></br><br></br>
            <label>Status da Conta</label>
            <br></br>
            <select name="select">
                <option value="valor1" selected>True</option>
                <option value="valor2">False</option>
            </select>
            {/* <input type = "text" placeholder='Digite o Tipo da Conta'></input> */}

            <br></br><br></br>

            <input type = "button" onClick={()=>funcao1()} value={"              Adicionar              "}/>

        </div>

    )
}