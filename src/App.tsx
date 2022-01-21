import React, {useState} from 'react';
import './App.css';
import {Accordeon} from "./components/Accordeon/Accordeon";
import {RateValueType, Rating, RatingPropsType} from "./components/Rating/Rating";
import {UncOnOff} from "./components/UncOnOff/UncOnOff";
import {UnCtrldAccordeon} from "./components/UnCtrldAccordeon/UnCtrldAccordeon";
import {UnCtrldRating} from "./components/UnCtrldRating/UnCtrldRating";
import {OnOff} from "./components/OnOff/OnOff";
import {
    ControlledCheckbox,
    ControlledInput, ControlledSelect,
    GetValueUncontrolledInputByButton,
    TrackValueUncontrolledInput
} from "./components/ControlledInput/contrInput";
import CustomSelect from "./components/Custom Select/CustomSelect";

type PageTitleType = {
    title: string
}

function App() {
    console.log("App rendering")

    let [rateValue, setRateValue] = useState<number>(0)

    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [collapsed2, setCollapsed2] = useState<boolean>(true)

    let [on, setOn] = useState<boolean>(false)

    const onClickCallBack = (value:any)=>{
        console.log(`some Item ${value} was clicked`)
    }

    return (
        <div className={'App'}>
            {/*<TrackValueUncontrolledInput/>*/}
            {/*<GetValueUncontrolledInputByButton/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckbox/>*/}
            <ControlledSelect/>
            <CustomSelect />
            {/*<UnCtrldAccordeon title={'MAIN MENU'}/>
            <UnCtrldAccordeon title={'Secondary MENU'}/>*/}
            {/* <UnCtrldRating />
            <UnCtrldRating />
            <UnCtrldRating />
            <UnCtrldRating />
            <UnCtrldRating />*/}
            {/*<OnOff value={on} onClick={setOn}/>*/}
            {/*<UncOnOff/>
            <UncOnOff/>*/}
            {/* <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>*/}
            {/*  Article 1
            <Rating value={rateValue} onClick = {setRateValue}/>*/}
            <Accordeon title={'MAIN MENU'} collapsed={collapsed} onChange={setCollapsed}
                       items={[{title: 'Miroslav', value: 1}, {title: 'Kamilla', value: 2},
                           {title: 'Anna', value: 3}, {title: 'Ivan', value: 4}, {title: 'Alyona', value: 5}]} onClick={onClickCallBack}/>
            <Accordeon title={'Secondary MENU'} collapsed={collapsed2} onChange={setCollapsed2}
                       items={[{title:'Moscow',value:1}, {title:'Saint-Petersburg',value:2},{title: 'Bryansk',value:3}]} onClick={onClickCallBack}/>
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

