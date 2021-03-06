import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";
import usersReduser from "./users-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReduser } from "redux-form";

let redusers = combineReducers({
  dialogsPage: dialogsReduser,
  profilePage: profileReduser,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReduser,
});

export let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
