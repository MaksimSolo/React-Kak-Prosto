import React, {useMemo, useState} from 'react';
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
import {ExampleUseMemo, HelpToReactMemo} from "./ExampleUseMemo";
import {CityType, FilterType, MemoSelect} from "./components/Custom Select/MemoCustomSelect";
import {LikeUseCallback} from "./ExampleUseCallback";
import {UseStateExample} from "./UseStateExample";
import {SetIntervalExample, SetTimeOutExample, UseEffectExample,} from "./UseEffectExample";


type PageTitleType = {
    title: string
}

function App() {
    console.log("App rendering")

    const [citySelect, setCitySelect] = useState<Array<CityType>>([
        {id: '1', title: 'Moscow', population: 15000000},
        {id: '2', title: 'Minsk', population: 5000000},
        {id: '3', title: 'Ruskeala', population: 50000},
    ])

    let [rateValue, setRateValue] = useState<number>(0)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [collapsed2, setCollapsed2] = useState<boolean>(true)
    let [collapsed3, setCollapsed3] = useState<boolean>(true)
    let [customSelectTitle, setCustomSelectTitle] = useState('Choose item')
    let [selectValue1, setSelectValue1] = useState(null)
    let [selectValue2, setSelectValue2] = useState(null)
    let [selectValue3, setSelectValue3] = useState(null)
    const [counter, setCounter] = useState(0)

    let [on, setOn] = useState<boolean>(false)

    const onClickCallBack = (value: any) => {
        console.log(`some Item ${value} was clicked`)
    }

    const changeTitleOfCustomSelect = (newTitle: string) => {
        setCustomSelectTitle(newTitle)
        setCollapsed3(true)
    }
    /*const getSelectorForSelect = (filter: FilterType) => {
        switch (filter) {
            case "titlefiltered":
                return citySelect.filter(i => i.title.toLowerCase().indexOf('m') > -1)
            case "populationfiltered":
                return citySelect.filter(i => i.population < 10000000)
            case "all":
                return citySelect
        }
    }*/
    const titlefilteredSelect = useMemo(() => {
        return citySelect.filter(i => i.title.toLowerCase().indexOf('m') > -1)
    }, [citySelect])
    const populationfilteredSelect = useMemo(() => {
        return citySelect.filter(i => i.population < 10000000)
    }, [citySelect])
    //const allSelect = useMemo(()=>{return citySelect},[citySelect])

    return (
        <div className={'App'}>
            <SetIntervalExample/>
            {/*<SetTimeOutExample/>*/}
            {/*<UseEffectExample/>*/}
            {/*<UseStateExample/>*/}
            {/*<LikeUseCallback />*/}
            {/*<button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>*/}
            {/*{counter}*/}
            {/*<MemoSelect items={citySelect} onChange={setSelectValue1} value={selectValue1}
                        filterForSelect={titlefilteredSelect}/>
            <MemoSelect items={citySelect} onChange={setSelectValue2} value={selectValue2}
                        filterForSelect={populationfilteredSelect}/>
            <MemoSelect items={citySelect} onChange={setSelectValue3} value={selectValue3}
                        filterForSelect={citySelect}/>*/}

            {/*<ExampleUseMemo/>*/}
            {/*<HelpToReactMemo/>*/}
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

