import { SET_PAGE } from '../actions/PageSwitchAction'

const initialState = {
    page: 'index',
}

export function pageSwitchReducer(state = initialState, action){
    switch(action.type){
        case SET_PAGE:
        return {...state, page: action.payload}
      
        default: 
        return state
    }
}