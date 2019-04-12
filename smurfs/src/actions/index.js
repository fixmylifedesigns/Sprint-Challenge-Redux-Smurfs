/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAIL = "ADD_FAIL";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios
      .get(`http://localhost:3333/smurfs`)

      .then( res  => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_FAIL,
          payload: err
        });
      });
  };
};

export const addSmurf = (newSmurf) => {
  return dispatch => {
    dispatch({ type: ADD_START });
    axios
      .post('http://localhost:3333/smurfs', newSmurf)

      .then( res  => {
        dispatch({
          type: ADD_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_FAIL,
          payload: err
        });
      });
  };
};

// export const addSmurf = e => {
//   return {
//     type: addSmurf,
//     payload: e
//   };
// };
