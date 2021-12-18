import { useState } from "react"
import UserComponente from "./UserComponente"

export default function Residencia(){
    const [user, setUser] = useState('')

    return (
        <div>
            <h1>Input</h1>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
            <h1>Componente de usuario</h1>
            <UserComponente name={user} />
        </div>
    )
}