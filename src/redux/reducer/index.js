import { type } from '../action'

const defaultState = {
    menuName: '首页'
}
export default (state = defaultState, action) => {
    switch (action.type) {
        
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName: action.menuName
            }
        default:
            return state
    }
}