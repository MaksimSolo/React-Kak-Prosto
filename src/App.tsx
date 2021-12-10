import React, {useState} from 'react';
import './App.css';
import {Accordeon} from "./components/Accordeon/Accordeon";
import {RateValueType, Rating, RatingPropsType} from "./components/Rating/Rating";
import {UncOnOff} from "./components/UncOnOff/UncOnOff";
import {UnCtrldAccordeon} from "./components/UnCtrldAccordeon/UnCtrldAccordeon";
import {UnCtrldRating} from "./components/UnCtrldRating/UnCtrldRating";
import {OnOff} from "./components/OnOff/OnOff";

type PageTitleType = {
    title: string
}

function App() {
    console.log("App rendering")

    let [rateValue, setRateValue] = useState<number>(0)

    let [collapsed, setCollapsed] = useState<boolean>(true)

    let [on, setOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
             <UnCtrldAccordeon title={'MAIN MENU'} />
            <UnCtrldAccordeon title={'Secondary MENU'} />
            {/*  <UnCtrldRating />
            <UnCtrldRating />
            <UnCtrldRating />
            <UnCtrldRating />
            <UnCtrldRating />*/}
            {/*<OnOff value={on} onClick={setOn}/>*/}

           {/* <UncOnOff onChange={setOn}/>
            {on.toString()}*/}


            {/* <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>*/}
            {/*  Article 1
            <Rating value={rateValue} onClick = {setRateValue}/>*/}
          {/*  <Accordeon title={'MAIN MENU'} collapsed={collapsed} onClick={setCollapsed}/>
            <Accordeon title={'Secondary MENU'} collapsed={collapsed} onClick={setCollapsed}/>*/}
            {/* Article 2
            <Rating value={rateValue} onClick = {setRateValue}/>
            <Rating value={rateValue} onClick = {setRateValue}/>
            <Rating value={rateValue} onClick = {setRateValue}/>
            <Rating value={rateValue} onClick = {setRateValue}/>
            <Rating value={rateValue} onClick = {setRateValue}/>
            <Rating value={rateValue} onClick = {setRateValue}/>*/}
        </div>
    );
}

export default App;

function PageTitle(props: PageTitleType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

