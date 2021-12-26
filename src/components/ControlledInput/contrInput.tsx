import React, {ChangeEvent, useRef, useState} from "react";

// export const UncontrolledInput = () => <input/>;

//export const ControlledInput = () => <input value={'it-inc'}/>;

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <>
        <input onChange={onChange}/> - {value};
    </>
}

//можно так: но это нарушение принципов реакт, так как идет обращение напрямую в DOM.
/*export const GetValueUncontrolledInputByButton = () => {
    const [value, setValue] = useState('')
    return <>
        <input id={'inputID'}/>
        <button onClick={() => {
            const el = document.getElementById('inputID') as HTMLInputElement
            setValue(el.value)
        }}>save
        </button>
        - {value};
    </>
}*/

export const GetValueUncontrolledInputByButton = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const saveButton = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={saveButton}>save</button>
        - {value};
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | number | readonly string[] | undefined>(4)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option value={'1'}>Bryansk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Minsk</option>
        <option value={'4'}>none</option>
    </select>
}



