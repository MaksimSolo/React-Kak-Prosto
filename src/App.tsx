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
import {CustomSelect} from "./components/Custom Select/CustomSelect";
import {Select} from "./components/Custom Select/CustomSelect15series";

type PageTitleType = {
    title: string
}

function App() {
    console.log("App rendering")

    let [rateValue, setRateValue] = useState<number>(0)

    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [collapsed2, setCollapsed2] = useState<boolean>(true)
    let [collapsed3, setCollapsed3] = useState<boolean>(true)
    let [customSelectTitle, setCustomSelectTitle] = useState('Choose item')
    let [selectValue, setSelectValue] = useState(null)

    let [on, setOn] = useState<boolean>(false)

    const onClickCallBack = (value: any) => {
        console.log(`some Item ${value} was clicked`)
    }

    const changeTitleOfCustomSelect = (newTitle: string) => {
        setCustomSelectTitle(newTitle)
        setCollapsed3(true)
    }

    return (
        <div className={'App'}>
            {/*<TrackValueUncontrolledInput/>*/}
            {/*<GetValueUncontrolledInputByButton/>*/}
            {/*<ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>*/}
            {/*<Select onChange={setSelectValue}
                    value={selectValue}
                    items={[{title: 'Miroslav', value: 1}, {title: 'Kamilla', value: 2},
                        {title: 'Anna', value: 3}, {title: 'Ivan', value: 4}, {title: 'Alyona', value: 5}]}
            />*/}
            {/*<CustomSelect title={customSelectTitle} collapsed={collapsed3}
                          onChange={setCollapsed3}
                          items={[{title: 'Miroslav', value: 1}, {title: 'Kamilla', value: 2},
                              {title: 'Anna', value: 3}, {title: 'Ivan', value: 4}, {title: 'Alyona', value: 5}]}
                          onClick={onClickCallBack}
                          onDoubleClick={changeTitleOfCustomSelect}/>*/}
            {/*<UnCtrldAccordeon title={'MAIN MENU'}/>
            <UnCtrldAccordeon title={'Secondary MENU'}/>*/}
            {/*<UnCtrldRating />
            <UnCtrldRating />
            <UnCtrldRating />
            <UnCtrldRating />
            <UnCtrldRating />*/}
            {/*<OnOff value={on} onClick={setOn}/>*/}
            {/*<UncOnOff/>
            <UncOnOff/>*/}
            {/*<PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>*/}

            {/*<Accordeon title={'MAIN MENU'} collapsed={collapsed} onChange={setCollapsed}
                       items={[{title: 'Miroslav', value: 1}, {title: 'Kamilla', value: 2},
                           {title: 'Anna', value: 3}, {title: 'Ivan', value: 4}, {title: 'Alyona', value: 5}]} onClick={onClickCallBack}/>
            <Accordeon title={'Secondary MENU'} collapsed={collapsed2} onChange={setCollapsed2}
                       items={[{title:'Moscow',value:1}, {title:'Saint-Petersburg',value:2},{title: 'Bryansk',value:3}]} onClick={onClickCallBack}/>*/}
            {/*Article 1
            <Rating value={rateValue} onClick={setRateValue}/>
            Article 2
            <Rating value={rateValue} onClick={setRateValue}/>
            <Rating value={rateValue} onClick={setRateValue}/>
            <Rating value={rateValue} onClick={setRateValue}/>
            <Rating value={rateValue} onClick={setRateValue}/>
            <Rating value={rateValue} onClick={setRateValue}/>
            <Rating value={rateValue} onClick={setRateValue}/>*/}
        </div>
    );
}

export default App;

const PageTitle = React.memo(function PageTitle(props: PageTitleType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
});

