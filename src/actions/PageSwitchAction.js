export const SET_PAGE = 'SET_PAGE';

export function switchPage(page){
    return {
        type: SET_PAGE,
        payload: page,
    }
}