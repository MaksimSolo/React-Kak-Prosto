import React from "react";

type ItemType={
    title: string
    value: any
}

type AccordeonType = {
    title: string
    collapsed: boolean
    items: Array<ItemType>
    onChange: (collapsed: boolean) => void
    onClick: (value: any)=>void
}

type AccordeonTitleType = {
    title: string
    onChange: (collapsed: boolean) => void
    collapsed: boolean

}
type AccordeonBodyType = {
    items: ItemType[]
    onClick: (value: any)=>void
}


export function Accordeon(props: AccordeonType) {
    console.log("Accord rendering")

    return <div>
        <AccordeonTitle title={props.title} onChange={props.onChange} collapsed={props.collapsed}/>
        {props.collapsed || <AccordeonBody items={props.items} onClick={props.onClick}/>}
    </div>
}

function AccordeonTitle(props: AccordeonTitleType) {
    console.log("ACC Title")
    return <h3 onClick={() => props.onChange(!props.collapsed)}>{props.title}</h3>
}

function AccordeonBody(props: AccordeonBodyType) {
    console.log("ACC Body")
    return <ul>
        {
            props.items.map((item, index) => <li onClick={()=>{props.onClick(item.value)}} key={index}>{item.title}</li>)
        }
    </ul>
}