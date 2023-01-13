import { crateStore } from ''
import { combineReducers } from 'redux'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import profileReducer from './profile-reducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebarUnit: sidebarReducer,
})

let store = crateStore(reducers)

export default store
