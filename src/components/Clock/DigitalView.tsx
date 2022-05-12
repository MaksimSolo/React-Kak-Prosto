import React from "react";
import {AllViewsType} from "./Clock";


export const DigitalView = (props: AllViewsType) => {
    const getTwoDigits = (num: number) => {
        return num < 10 ? '0' + num : num
    }
    //let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    // let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    // let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    let hours = getTwoDigits(props.date.getHours());
    let minutes = getTwoDigits(props.date.getMinutes());
    let seconds = getTwoDigits(props.date.getSeconds());

    let timeCounter = 'hrs: ' + hours + '- min: ' + minutes + '- sec: ' + seconds;

    return <div>
        {timeCounter}
    </div>;
};
