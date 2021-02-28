


const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
    Messages:[
        {id: 1, message: 'Hello, what is the delivery time?', nameOfMenu: 'Messenger'},
        {id: 2, message: 'Hi do you have this item in stock?', nameOfMenu: 'My Questions'},
        {id: 3, message: 'Does this come in the color blue?', nameOfMenu: 'My Questions'},
        {id: 4, message: 'My delivery has not arrived, what can I do?', nameOfMenu: 'Messenger'},
    ],
}

export const MessagesReducer = (state = initialState, action) => {

    switch (action.type){

        case ADD_MESSAGE:
            return{
                ...state,
                Messages:[...state.Messages, action.payload]
            }
        default:
            return state
    }
}



export const addMessage = (messageItem, nameOfMenu) => ({ type: ADD_MESSAGE, payload: { id: 5, message: messageItem, nameOfMenu: nameOfMenu} })