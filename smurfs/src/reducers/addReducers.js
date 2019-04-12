import { ADD_START } from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: false
};

export const addReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_START:
      return{
        ...state,
        addingSmurf:true,
        smurfs: [action.payload]
      }
      default:
      return state
    }
  
  }