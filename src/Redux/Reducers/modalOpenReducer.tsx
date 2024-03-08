interface ModalOpenAction{
  type: string;
}
const clickState: boolean = false
export const modalOpenReducer = (state:boolean = clickState, action: ModalOpenAction):any => {
  switch(action.type){
      case 'Modal_Open':
          return true
      case 'Modal_Close':
          return false
      default:
          return state
  }
}