import React, {useMemo, useState} from 'react';


const generateData = () => {
    console.log("generateData")
    //difficult counting!!!!!!!!
    return 32163568456;
}

export const UseStateExample = () => {
    console.log('UseStateExample')

    /* const initValue = useMemo(generateData,[]);*/


    const [counter, setCounter] = useState(generateData)

    /*const changer = (state: number) => {
                return state + 1
    };*/

    return (
        <div>
            {/*<button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>*/}
            {/*<button onClick={() => {
                setCounter(changer)
            }}>+
            </button>*/}
            <button onClick={() => {
                setCounter(state => state + 1);
            }}>+
            </button>
            {counter}
        </div>
    );
};



