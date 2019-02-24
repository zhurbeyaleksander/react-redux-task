import {CHANGE_ITEMS} from '../actions/TableActions'
import {CHANGE_TOTAL} from '../actions/TableActions'

const initialState = {
    items: [
        {id: 1, item: 'Товар 1', price: 100, amount: 0},
        {id: 2, item: 'Товар 2', price: 150, amount: 0},
        {id: 3, item: 'Товар 3', price: 200, amount: 0},
    ],
    total: 0,
}

export function goodsStoreReducer(state = initialState, action){
    switch(action.type){
        case CHANGE_ITEMS:
        return {...state, items: action.payload}
        case CHANGE_TOTAL:
        return {...state, total: action.payload}

        default:
        return state
    }
}