import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn22119578Reducer from '../features/SignIn22119578/redux/reducers'
import SignIn2119527Reducer from '../features/SignIn2119527/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn22119578: SignIn22119578Reducer,
SignIn2119527: SignIn2119527Reducer,

});