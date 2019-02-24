export const CHANGE_ITEMS = 'CHANGE_ITEMS';
export const CHANGE_TOTAL = 'CHANGE_TOTAL';

export function changeItems(items){

    return{
        type: CHANGE_ITEMS,
        payload: items,
    }
}

export function changeTotal(total){

    return{
        type: CHANGE_TOTAL,
        payload: total,
    }
}