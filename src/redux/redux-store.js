import {combineReducers, createStore} from "redux";
import {MessagesReducer} from "./MessagesReducer";
import {SidebarReducer} from "./SidebarReducer";

export const store = createStore(combineReducers({SidebarReducer, MessagesReducer}))