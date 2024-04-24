interface SelectedIdx {
    type:string;
}
const idxState: number = 0
export const selectedIdxReducer = (state:number = idxState, action:SelectedIdx ):number => {
    switch(action.type){
        case '0':
            return 0
        case '1':
            return 1
        case '2':
            return 2
        case '3':
            return 3
        default:
            return state
    }
}
