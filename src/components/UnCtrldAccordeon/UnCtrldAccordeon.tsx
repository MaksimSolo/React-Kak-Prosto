import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordeonType = {
    title: string
    //collapsed: boolean
}

type AccordeonTitleType = {
    title: string
    onClick: () => void
}

export const UnCtrldAccordeon = React.memo(function UnCtrldAccordeon(props: AccordeonType) {
    console.log("Accord rendering")


    //let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: true})


    /*const changeStatus = () => {
        setCollapsed(!collapsed)
    }*/
    const changeStatus = () => {
                dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return <div>
        <AccordeonTitle title={props.title} onClick={changeStatus}/>
        {state.collapsed || <AccordeonBody/>}

    </div>
})

function AccordeonTitle(props: AccordeonTitleType) {
    console.log("ACC Title")
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordeonBody() {
    console.log("ACC Body")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}