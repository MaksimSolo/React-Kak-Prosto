import React from 'react';
import MemoCustomSelectItem from "./MemoCustomSelectItem";

export type FilterType = "titlefiltered" | "populationfiltered" | "all";

export type CityType = {
    id: string
    title: string
    population: number
}
export type SelectType = {
    value?: any
    items: Array<CityType>
    onChange: (value: any) => void
    filterForSelect: Array<CityType>
}


export const MemoSelect = React.memo(function MemoSelect(props: SelectType) {
    console.log('MemoSelect')

    return (
        <>
            <MemoCustomSelectItem items={props.items}
                                  onChange={props.onChange}
                                  value={props.value}
                                  filterForSelect={props.filterForSelect}/>
        </>
    );
});



