import { getPlanoDeContas } from "../../models/firestore/PlanoDeContasStore"
import PlanoDeContas from "../../models/PlanoDeContas"
import EnhancedTable from '../ContasAPagar/ControleContas';

export default function Home(){
    const planoDeContas: PlanoDeContas = getPlanoDeContas();
    
    
    return (
        <div>
            <p>
                Esta é a tela que será utilizada para os exercícios ao longo do treinamento. Abaixo dessa tag faça a inserção dos seus componentes...
            </p>
            <hr />
            <EnhancedTable planoDeContas={planoDeContas} />
        </div>
    )
}