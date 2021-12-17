import { useState, useEffect } from 'react';
import { IUser } from '../../models/interfaces/IUser';

class UserInscrito implements IUser {
    uid: string;
    name: string;
    email: string;
    public constructor(
        _name: string, _email: string, _uid: string
    ) {
        this.email = _email;
        this.name = _name;
        this.uid = _uid;
    }
}

export default function Inscritos() {
    const [inscritos, setInscritos] = useState(new Array<UserInscrito>())
    const [change, setChange] = useState(true)

    useEffect(() => {

        /*Mock users */
        const users: Array<UserInscrito> = new Array<UserInscrito>();
        users.push(new UserInscrito('Teste 1', 'xxx', (new Date()).toUTCString()))
        users.push(new UserInscrito('Teste 2', 'xxx', (new Date()).toUTCString()))

        setInscritos(users)
        setChange(false)

        console.log('Effect acionado')
        
    }, [change])

    const adicionar = () => {
        setChange(true)        
    }

    return (
        <div>
            <ul>
                {
                    inscritos.map((inscrito: UserInscrito, i: Number) => {
                        return (
                            <>
                                <li>
                                    Nome : {inscrito.name} |
                                    UID : {inscrito.uid} |
                                    Email : {inscrito.email}
                                </li>
                            </>
                        )
                    })
                }
            </ul>
            <button onClick={ adicionar }>
                Adicionar
            </button>
        </div>
        )
}