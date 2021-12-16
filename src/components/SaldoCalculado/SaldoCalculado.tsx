import { useState } from 'react';

export default function SaldoCalculado() {
    const [blabla, setBlabla] = useState(1000)

    return (
        <p onClick={() => setBlabla(blabla + 1)}>
            {blabla}
        </p>
        )
}