import React from "react";

type AccordeonType = {
    title: string
    collapsed: boolean
    items?: []
    onChange: (collapsed: boolean) => void
    onClick?: () => void
}

type AccordeonTitleType = {
    title: string
    onChange: (collapsed: boolean) => void
    collapsed: boolean

}

export function Accordeon(props: AccordeonType) {
    console.log("Accord rendering")

    return <div>
        <AccordeonTitle title={props.title} onChange={props.onChange} collapsed={props.collapsed}/>
        {props.collapsed || <AccordeonBody/>}
    </div>
}

function AccordeonTitle(props: AccordeonTitleType) {
    console.log("ACC Title")
    return <h3 onClick={() => props.onChange(!props.collapsed)}>{props.title}</h3>
}

function AccordeonBody() {
    console.log("ACC Body")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}