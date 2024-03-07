import { combineReducers } from 'redux';

interface PageAction {
    type: string;
}
const pageState: number = 0
export const pageReducer = (state:number = pageState, action:PageAction ):number => {
    switch(action.type){
        case 'Main':
            return 0
        case 'About':
            return 1
        case 'Skills':
            return 2
        case 'Projects':
            return 3
        default:
            return 0
    }
}

interface OnclickAction{
    type:string;
    onClick:boolean;
}
const clickState: boolean = false
export const ClickReducer = (state:boolean = clickState, action: OnclickAction):any => {
    switch(action.type){
        case 'Javascript':
            return {
                state,
                skill:'Javascript',
                isOpen: true
            }
        case 'close':
            return{
                state,
                skill:'',
                isOpen:false
            }
        default:
            return state
    }
}

const reducers = combineReducers<any>({
    page: pageReducer,
    click:ClickReducer
})

export default reducers