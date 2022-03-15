import React, {useEffect, useState} from 'react';


export const UseEffectExample = () => {
    console.log('UseEffectExample')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(()=>{
        debugger
        console.log("effect every render")
        document.title = counter.toString()
    })
    useEffect(()=>{
        debugger
        console.log("effect only first render")
        document.title = counter.toString()
    }, [])
    useEffect(()=>{
        debugger
        console.log("effect when counter changing")
        document.title = counter.toString()
    },[counter])

    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            counter - {counter}
            <div>
            <button onClick={() => {
                setFake(fake + 1)
            }}>+
            </button>
            fake - {fake}
            </div>
        </div>
    );
};



