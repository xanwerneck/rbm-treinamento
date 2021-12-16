import { useState } from 'react'

interface ExampleMessage {
    message : String
}
export default function Example(props : ExampleMessage){
    return (
        <div>
            <h1>
                {props.message}
            </h1>
        </div>
    )
}

/*
export default function Example(){
    const [value, setValue] = useState(1000)

    const incrementa = () => {
        setValue(value + 1)
    }
    return (
        <div>
            <h1 id="saldo" onClick={incrementa}>
                Valor do saldo: {value}
            </h1>
        </div>
    )
}
*/

/*
export default function Example(){
    const [value, setValue] = useState(1000)

    const incrementa = () => {
        setValue(value + 1)
    }

    const limpar = () => setValue(0)

    return (
        <div>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <h1 id="saldo" onClick={incrementa}>
                Valor do saldo: {value}
            </h1>
            <button onClick={limpar}>
                Limpar
            </button>
        </div>
    )
}
*/
