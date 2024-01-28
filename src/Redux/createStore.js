import { createStore } from "redux";

function authReducer(state, action)
{
    if(action.type == 'add_Todo'){
        const todoText = action.payload.todoText;
        return [
         ...state,
         {}
        ]
    }

}

const res= createStore(authReducer,[])