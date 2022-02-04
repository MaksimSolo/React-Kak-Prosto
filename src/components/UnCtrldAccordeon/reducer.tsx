export type StateType = {
    collapsed: boolean
}
export type ActionType = {
    type: 'TOGGLE-COLLAPSED'
}
export const reducer = (state: StateType, action: ActionType): StateType => {
    console.log('reducer start')
    console.log(state)
    console.log(action)
    console.log('reducer end')

    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {...state, collapsed: !state.collapsed};

        default:
            throw new Error('Cant read type of action')
    }
}