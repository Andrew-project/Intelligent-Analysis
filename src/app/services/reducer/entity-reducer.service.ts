import {Action} from '@ngrx/store';

export function entityReducer (state: any = {}, action: Action) {
  // console.log(action);
  state[action.type] = action.payload;
  // console.log(state);
  return state;
}
