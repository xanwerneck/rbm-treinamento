import React, { useState } from "react"
import { IUser } from "../../models/interfaces/IUser"
import User from "../../models/User"

interface IUserInteira {
    [key : string] : string
}

export default function FormularioControlado()
{
    let users : IUserInteira = {
        "name" : "Alexandre",
        "email" : "Teste",
        "telefone" : "21 98700 9793"
    }
    const [user, setUser] = useState(users)

    const setValue = (e : React.ChangeEvent<HTMLInputElement>) => {
        let newUser = {...user}
        newUser[e.target.name] = e.target.value
        setUser(newUser)
    }

    return (
        <div>
            <p>
                {JSON.stringify(user)}
            </p>
            <input name="email" type="text" value={user["email"]} onChange={(e) => setValue(e)} />
            <input name="name" type="text" value={user["name"]} onChange={(e) => setValue(e)} />
            <input name="telefone" type="text" value={user["telefone"]} onChange={(e) => setValue(e)} />
        </div>
    )

}