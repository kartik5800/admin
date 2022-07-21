import React, { useEffect } from 'react';

function PromicesExample(props) {


    const one = () => {
        return 'one exucuted'
    }

    const two = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return 'tow exucuted'
            }, 2000);
        })

    }

    const three = () => {
        return 'three exucuted'
    }

    const all = async () => {
        const o = one()
        console.log(o);

        const t = await two()
        console.log(t);

        const th = three()
        console.log(th);

    }

    useEffect(() => {

        all()

    }, [])

    // const display = (j) => {
    //     console.log(j);
    // }
    // const sum = (display) => {
    //     let x = 10;
    //     let y = 8;

    //     let j = x + y;
    //     console.log(j);

    //     display(j)
    // }

    // sum(display);

    return (
        <div>
            <h1>promises example</h1>
        </div>
    );
}

export default PromicesExample;
