// import { BASE_URL } from "../../baseUrl";
import { getdoctordata, postdoctordata , deletedoctordata, updatedoctordata} from "../../Comman/api/Doctor.api";
import * as ActionTypes from "../ActionType"

export const doctordata = () => (dispatch) => {
  try {
    // dispatch(loadingdoctor())

   getdoctordata()
    .then((data)=> dispatch({ type: ActionTypes.GET_DOCTOR, payload: data.data }))
    .catch(error => dispatch((error.message)))



  } catch (error) {
   
  }
}


export const postdoctor = (data) => (dispatch) => {
  try {

    // dispatch(loadingMedicine())
   
    postdoctordata(data)
    .then((data)=> dispatch({ type: ActionTypes.POST_DOCTOR, payload: data.data }))
    .catch(error => dispatch((error.message)));
   
 
  } catch (error) {
    
  }
}


export const deletedoctor = (id) => (dispatch) => {
  try {

    deletedoctordata(id)
    .then(dispatch({ type: ActionTypes.DELETE_DOCTOR, payload: id }))
    // .catch(error => dispatch(errorMedicine(error.message)))

    
  } catch (error) {
    // dispatch(errorMedicine(error))
  }
}

export const updatedoctor = (data) => (dispatch) => {
  try {

    updatedoctordata(data)
    .then(dispatch({ type: ActionTypes.UPDATE_DOCTOR, payload: data }))
    // .catch(error => dispatch(errorMedicine(error.message)))

    
  } catch (error) {
    // dispatch(errorMedicine(error))
  }
}