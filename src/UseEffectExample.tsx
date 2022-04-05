import React, {useEffect, useState} from 'react';


export const UseEffectExample = () => {
    console.log('UseEffectExample')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        debugger
        console.log("effect every render")
        document.title = counter.toString()
    })
    useEffect(() => {
        debugger
        console.log("effect only first render")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        debugger
        console.log("effect when counter changing")
        document.title = counter.toString()
    }, [counter])

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

export const SetTimeOutExample = () => {
    console.log('SetTimeOutExample')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 5000)
    }, [counter])


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

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        setInterval(() => {
            console.log("TIKTOKK")
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    return (
        <div>
            {/* <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>*/}
            counter - {counter}
            <div>
                {/*<button onClick={() => {
                    setFake(fake + 1)
                }}>+
                </button>*/}
                fake - {fake}
            </div>
        </div>
    );
};

export const SetClockTimeExample = () => {

    const [date, setDate] = useState(new Date())

    const getTwoDigits = (num: number) => {
        return num < 10 ? '0' + num : num
    }
    //let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let hours = getTwoDigits(date.getHours());
    // let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let minutes = getTwoDigits(date.getMinutes());
    // let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let seconds = getTwoDigits(date.getSeconds());
    let timeCounter = 'hrs: ' + hours + '- min: ' + minutes + '- sec: ' + seconds;

    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('TIK')
            setDate(new Date())
        }, 1000)

        return () => {clearInterval(intervalID)}
    }, []);

    return (
        <div>
            {timeCounter}
        </div>
    );
};


