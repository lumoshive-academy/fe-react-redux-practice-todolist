import { legacy_createStore as createStore, combineReducers } from 'redux';

// state untuk menampung data
const counterState = {
    count: 0
}

const languageState = {
    language: 'en'
}

// action untuk penghubung antara state dan reducer
/*
{
    type: 'INCREMENT',
    payload: 4
}
*/

// slice untuk memisahkan reducer

// reducer untuk mengelola state
const counterReducer = (state = counterState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state;
    }
}

const languageReducer = (state = languageState, action) => {
    switch(action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}

// store untuk menyimpan semua state (data)
const rootReducer = combineReducers({
    conter: counterReducer,
    lang: languageReducer
})

const store = createStore(rootReducer);

// state awal
console.log("state awal", store.getState());

// subscribe untuk menangkap perubahan state (useEffect)
store.subscribe(() => {
    // menampilkan perubahan state
    console.log("state terbaru", store.getState());
})

// dispatch untuk mengirimkan action ke reducer
store.dispatch({
    type: 'INCREMENT',
    payload: 4
})

store.dispatch({
    type: 'DECREMENT',
    payload: 2
})

