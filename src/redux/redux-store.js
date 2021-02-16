import { combineReducers, createStore } from 'redux';
import dialogsReduser from './dialogs-reduser';
import profileReduser from './profile-reduser'; 
import usersReduser from './users-reduser';

let redusers = combineReducers({
	dialogsPage: dialogsReduser,
	profilePage: profileReduser,
	usersPage: usersReduser
});

export let store = createStore(redusers);

window.store = store;

export default store;