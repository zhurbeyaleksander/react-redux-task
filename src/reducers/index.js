import {combineReducers} from 'redux'
import {pageSwitchReducer} from './pageSwitch'
import {goodsStoreReducer} from './goodsStore'

export const rootReducer = combineReducers({
    pageSwitch: pageSwitchReducer,
    goodsStore: goodsStoreReducer,
})