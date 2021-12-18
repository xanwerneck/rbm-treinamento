import React, { useState } from "react"
import User from "../../models/User"
import Tabela from "../Tabela/Tabela"

export default function Formulario()
{
    const [users, setUsers] = useState(new Array<User>())
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const enviar = (e : React.FormEvent) => {
        e.preventDefault()
        const user : User = new User(name, (new Date()).toTimeString(), email)
        setUsers([...users, user])
        setName('')
        setEmail('')
    }

    return (
        <>
        <form onSubmit={(e : React.FormEvent) => enviar(e)}>
            <label htmlFor="">Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
        <Tabela users={users} />
        </>
    )
}