import { combineReducers } from "redux";
import { counterReducer } from "./Counter.reducer";
import { medicineReducer } from "./medicine.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    medicine:medicineReducer,
 
    User:userReducer
    
})

