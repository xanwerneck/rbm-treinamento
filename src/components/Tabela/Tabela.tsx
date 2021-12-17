import { useState, useEffect } from "react"
import { IUser } from "../../models/interfaces/IUser"

class UserRbm implements IUser
{
    uid: string
    name: string
    email: string
    public constructor(
        _uid : string, _name : string, _email : string
    ){
        this.uid = _uid
        this.name = _name
        this.email = _email
    }
}

export default function Tabela(props : {nUsers : Number})
{
    const [users, setUsers] = useState(new Array<UserRbm>())
    useEffect(() => {
        const newUsers : Array<UserRbm> = new Array<UserRbm>() 
        for (let index = 0; index < props.nUsers; index++) {
            let user : UserRbm = new UserRbm('2', 'Alexandre 2', 'xanwerneck2@gmail.com')
            newUsers.push(user)            
        }
        setUsers(newUsers)
    }, [])
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user : UserRbm, i : Number) => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}