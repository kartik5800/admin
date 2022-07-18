import { combineReducers } from "redux";
import { counterReducer } from "./Counter.reducer";
import { doctorReducer } from "./doctors.reducer";
import { medicineReducer } from "./medicine.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    medicine:medicineReducer,
    doctor:doctorReducer,
 
    User:userReducer
    
})

