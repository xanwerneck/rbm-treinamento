import { useState } from 'react';

export default function SaldoCalculado() {
    const [value, setValue] = useState(0)

    return (
        <div>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => setValue(0)}>
                Limpar
            </button>
            <p onClick={() => setValue(value + 1)}>
                {value}
            </p>
        </div>
        )
}