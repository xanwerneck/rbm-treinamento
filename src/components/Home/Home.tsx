import AddPlanoConta from "../AddPlanoConta/AddPlanoConta";
import VisualizarSaldo from "../VisualizaSaldo/VisualizaSaldo";

export default function Home(){
    return (
        <div>
            <p>
                <b>Consulta Saldo do Usuário</b>
            </p>
            <hr />
            <VisualizarSaldo/><br></br>     
            <hr />     
        </div>
    )
}