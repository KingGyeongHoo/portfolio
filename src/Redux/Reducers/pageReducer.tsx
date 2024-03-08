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
            return state
    }
}
