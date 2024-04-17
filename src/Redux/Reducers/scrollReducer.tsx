interface ScrollAction{
    type: string;
    scrollAmt: number;
  }
  const scrollState: number = 0
  export const ScrollReducer = (state:number = scrollState, action: ScrollAction):any => {
    switch(action.type){
        case 'SCROLL':
            return action.scrollAmt
        default:
            return state
    }
  }