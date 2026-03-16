import { dispatchAlert, clearAlert } from "../state/alerts";

export const displayAlert = (dispatch, msg, type) => {

    //dispatch alert
    dispatch(dispatchAlert({msg: msg, type: type}));

    // Remove alert after 3 seconds
    setTimeout(() => {
    dispatch(clearAlert());
    }, 3000);
  }