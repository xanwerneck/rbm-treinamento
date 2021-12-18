import User from "../../models/User"

export default function Tabela(props : {users : Array<User>})
{
    return (
        <table style={{border: '1px solid black'}}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user : User, i : Number) => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}