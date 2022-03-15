import React, {useMemo, useState} from 'react';

export const ExampleUseMemo = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            resultA = resultA * i;
        }
        return resultA;
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <>
            <input value={a} onChange={(e) => {
                setA(Number(e.currentTarget.value))
            }}/>
            <input value={b} onChange={(e) => {
                setB(+e.currentTarget.value)
            }}/>
            <hr/>
            <div>
                Result for a:{resultA}
            </div>
            <div>
                Result for b:{resultB}
            </div>
        </>
    );
};


const Users = React.memo(function Users(props: { users: Array<string> }) {
    console.log('USERS')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
});


export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Miroslav', 'Anna', 'Kamilla', 'Ivan'])
    const newArray = useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf('i')>-1)},[users])

    const addUser = () =>{
        const newUsers= [...users, 'Aleksei' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={()=>addUser()}>ADD USER</button>
            {counter}
            <Users users={newArray} />
        </div>
    );
};



