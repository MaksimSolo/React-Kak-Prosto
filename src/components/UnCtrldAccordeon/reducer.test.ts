import {ActionType, reducer, StateType} from "./reducer";


test('reducer should change value to opposite', () => {
    //data
    let state: StateType = {collapsed: true}
    //action
    const action: ActionType = {
        type: 'TOGGLE-COLLAPSED'
    }

    const newState = reducer(state, action);
    //expectations
expect(newState.collapsed).toBe(false)

})

test('reducer should change value to opposite', () => {
    //data
    let state: StateType = {collapsed: false}
    //action
    const action: ActionType = {
        type: 'TOGGLE-COLLAPSED'
    }

    const newState = reducer(state, action);
    //expectations
    expect(newState.collapsed).toBe(true)

})

/*
test('reducer should throw error', () => {
    //data
    let state: StateType = {collapsed: false}
    //action
    //expectations
    expect(()=>{reducer(state, {
        type: 'FAKETYPE'
    })}).toThrowError()

})*/
