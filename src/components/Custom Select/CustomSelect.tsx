import React from 'react';

type ItemType={
    title: string
    value: any
}
export type CustomSelectType ={
    title: string
    collapsed: boolean
    items: Array<ItemType>
    onChange: (collapsed: boolean) => void
    onClick: (value: any)=>void
    onDoubleClick: (title: string)=>void
}
const CustomSelectComponent = (props:CustomSelectType) => {

    return (
        <div>
            <h3 onClick={() => props.onChange(!props.collapsed)}>{props.title}</h3>
            {props.collapsed || props.items.map((item, index) => <li onDoubleClick={()=>props.onDoubleClick(item.title)} onClick={()=>{props.onClick(item.value)}} key={index}>{item.title}</li>)}
        </div>
    );
};

export const CustomSelect= React.memo(CustomSelectComponent)


