import { useContext } from "react"
import { UserContext } from "../../helpers/UserContext"

export default function ContasAPagar(){
    const userLogged = useContext(UserContext)
    return (
        <h2>Usuario logado: {userLogged?.name}</h2>
    )
}