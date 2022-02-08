import React, {useMemo, useState} from 'react';
import style from "./Select.module.css";
import {CityType} from "./MemoCustomSelect";


type MemoCustomSelectItemType = {
    value?: any
    items: Array<CityType>
    onChange: (value: any) => void
    filterForSelect: Array<CityType>
}

const MemoCustomSelectItem = (props: MemoCustomSelectItemType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.title === props.value)
    const hoveredItem = props.items.find(i => i.title === hoveredElementValue)
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }


    const selectForRender = props.filterForSelect.map(i =>
            <div onMouseEnter={() => {setHoveredElementValue(i.title)}}
                 className={style.item + ' ' + (hoveredItem === i ? style.selected : '')}
                 onClick={() => {onItemClick(i.title)}}
                 key={i.id}>{i.title}</div>);



    return (
        <div className={style.select}>
            <h3 className={style.main}
                onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
            {active &&
                <div className={style.items}>
                    {selectForRender}
                </div>
            }
        </div>
    );
};

export default MemoCustomSelectItem;