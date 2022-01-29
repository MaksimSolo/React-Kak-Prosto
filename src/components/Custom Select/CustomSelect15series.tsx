import React, {useState} from 'react';
import style from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
export type SelectType = {
    value?: any
    items: Array<ItemType>
    onChange: (value: any) => void
}

export const Select = React.memo(function SelectComponent(props: SelectType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }


    return (
        <>
            <div className={style.select}>
                <h3 className={style.main}
                    onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
                {active &&
                    <div className={style.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={style.item + ' ' + (hoveredItem === i ? style.selected : '')}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                            key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    );
});



