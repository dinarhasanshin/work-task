

const ADD_SIDEBAR_ITEMS = 'SET-SIDEBAR-ITEMS'
const SET_SELECTED_SIDEBAR = 'SET-SELECTED-SIDEBAR'


const initialState = {
    SidebarItems:[
        { id: 1, name: 'Messenger' },
        { id: 2, name: 'My Questions' },
    ],
    selectedSidebarItem: 'Messenger'
}

export const SidebarReducer = (state = initialState, action) => {

    switch (action.type){

        case ADD_SIDEBAR_ITEMS:
            return {
                ...state,
                SidebarItems: [...state.SidebarItems, action.payload]
            }
        case SET_SELECTED_SIDEBAR:
            return {
                ...state,
                selectedSidebarItem: action.payload
            }
        default:
            return state
    }
}

export const addSidebarItem = (sidebarItemName) => ({ type: ADD_SIDEBAR_ITEMS, payload: {id: 3, name: sidebarItemName} })
export const setSelectedSidebarItem = (selectedItem) => ({ type: SET_SELECTED_SIDEBAR, payload: selectedItem })