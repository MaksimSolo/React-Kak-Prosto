import React, {useEffect, useState} from 'react';
import {cleanup} from "@testing-library/react";


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
        const intervalId = setInterval(() => {
            console.log("TIKTOKK")
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
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

// export const SetClockTimeExample = () => {
//
//     const [date, setDate] = useState(new Date())
//
//     const getTwoDigits = (num: number) => {
//         return num < 10 ? '0' + num : num
//     }
//     //let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
//     let hours = getTwoDigits(date.getHours());
//     // let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//     let minutes = getTwoDigits(date.getMinutes());
//     // let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
//     let seconds = getTwoDigits(date.getSeconds());
//     let timeCounter = 'hrs: ' + hours + '- min: ' + minutes + '- sec: ' + seconds;
//
//     useEffect(() => {
//
//         const intervalID = setInterval(() => {
//             console.log('TIK')
//             setDate(new Date())
//         }, 1000)
//
//         return () => {clearInterval(intervalID)}
//     }, []);
//
//     return (
//         <div>
//             {timeCounter}
//         </div>
//     );
// };


export const ResetEffectExample = () => {
    console.log('Component ResetEffectExample rendered')

    const [counter, setCounter] = useState(0)


    useEffect(() => {
        console.log('Hi There! Effect is already happened----' + counter)

        return () => {
            console.log('Reset Effect----------' + counter)          //зачистка происходит либо перед "уничтожением" компонента, либо перед
            //тем как выполнится перерендер и новый эффект произойдет,то есть как бы ретурн эффекта хранит то старое значение чтобы его зачистить
            //причем вначале происходит зачистка а уже потом новый эффект!!!!

        }
    }, [counter])


    return (
        <div>
            {counter}-------
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};


export const KeysTrackerExample = () => {


    const [text, setText] = useState('')
    console.log('Component  rendered with text -------' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        //в данной ситуации если мы перейдем в другую компоненту, и вернемся - если зачистки не будет
        //значит всегда будет фиксироваться нажатие клавиш, и утечка памяти!!!!

        return () => {
            window.removeEventListener('keypress', handler)  //в таком случае если не сделали зачистку - будет огромное количество рендеров
        }
    }, [text])


    return (
        <div>
            Typed text:---{text}
        </div>
    );
};


export const SetTimeOutCleared = () => {


    const [text, setText] = useState('')
    console.log('Component  rendered with text -------' + text)

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('Timeout EXPIRED')
            setText('3 seconds passed')
        }, 3000)  // в данной ситуации если мы вышли из компоненты ранее чем 3 сек, то будет ошибка, потому что мы пытаемся обновить
        //стейт уже неживой компоненты!!!!!
        // необходимо сделать очистку
        return () => {
            clearTimeout(timeoutID) // так нужно поступать и с запросами на сервер, кога мы можем уйти из компоненты не дожидаясь ответа с сервера
        }
    }, [text])


    return (
        <div>
            Typed text:---{text}
        </div>
    );
};


















