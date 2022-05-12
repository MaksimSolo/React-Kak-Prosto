import React, {useEffect, useState} from "react";
import {AnalogView} from "./AnalogView";
import {DigitalView} from "./DigitalView";

type ClockType = {
    mode?: 'digital' | 'analog';
}
export type AllViewsType = {
    date: Date;
}

export const Clock = (props: ClockType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('TIK')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    return props.mode === 'analog' ? <AnalogView date={date}/> : <DigitalView date={date}/>
};