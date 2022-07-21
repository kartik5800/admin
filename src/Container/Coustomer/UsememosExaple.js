
import React, { useMemo, useState } from 'react'

export default function UsememosExaple() {
    const [number, setnumber] = useState(0)
    const [count, setcount] = useState(0)


    const final = (n) => {
        if(n > 1) {
            return n * final(n-1);
        }else {
            return 1;
        }
    }

    // const result = final(number);

    const result = useMemo(() =>final(number), [number]);
    return (
        <>
            <h1>UsememosExaple</h1>

            <input type='text' placeholder='number' onChange={(e) => setnumber(e.target.value)} />
            <button onClick={() => setcount(count + 1)}>counter</button>

           <div>
            <p>counter value is:{count}</p>
            <p>final value is:{result}</p>
           </div>
        </>
    )
}
