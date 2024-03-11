interface PModalOpenAction{
    type: string;
  }
  const clickState: boolean = false
  export const projectModalOpenReducer = (state:boolean = clickState, action: PModalOpenAction):any => {
    switch(action.type){
        case 'PModal_Open':
            return true
        case 'PModal_Close':
            return false
        default:
            return state
    }
  }