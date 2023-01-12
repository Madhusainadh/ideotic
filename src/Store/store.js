import { applyMiddleware, legacy_createStore ,combineReducers} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer"


const rootReducer = combineReducers({
    auth: authReducer,

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))