import { createStore } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    posts:[],
}

export const reducer = (state = initialState,action) => {
    switch (action.type) {

        case HYDRATE:{
            return {
                ...action.payload
            }
        }
        case 'POSTS_SET_DATA':{
            return {
                ...state,
                posts:action.payload,
            }
        }

        default: {
            return state;
        }
    }
}



const store = createStore(reducer);

export default store;






