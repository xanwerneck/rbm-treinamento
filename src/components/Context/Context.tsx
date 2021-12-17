import { useContext } from "react"
import { UserContext } from "../../helpers/UserContext"

export default function Context() {
    const value = useContext(UserContext)
    return (
        <div>
            {value?.email}
        </div>
    )
}