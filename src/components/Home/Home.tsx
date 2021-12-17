import Context from "../Context/Context";
import Tabela from "../Tabela/Tabela";

export default function Home(){
    return (
        <div>
            <p>
                Esta é a tela que será utilizada para os exercícios ao longo do treinamento. Abaixo dessa tag faça a inserção dos seus componentes...
            </p>
            <hr />
            <Tabela nUsers={5} />
            <Context />
        </div>
    )
}