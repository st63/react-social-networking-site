import { combineReducers, createStore } from 'redux';
import dialogsReduser from './dialogs-reduser';
import profileReduser from './profile-reduser'; 

let redusers = combineReducers({
	dialogsPage: dialogsReduser,
	profilePage: profileReduser,
});

export let store = createStore(redusers);

export default createStore;