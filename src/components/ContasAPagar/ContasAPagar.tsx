import { useContext } from "react"
import { UserContext } from "../../helpers/UserContext"
import AddContasAPagar from "../AddContasAPagar/AddContasAPagar"
import ControleContasAPagar from "./ControleContasAPagar"

export default function ContasAPagar(){
    const userLogged = useContext(UserContext)
    return (
        <>
            <AddContasAPagar />
            <ControleContasAPagar />
        </>
    )
}