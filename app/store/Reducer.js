import { GET_PODCASTS } from './Types';

const initialState = {
    podcasts: null
};

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case GET_PODCASTS:
            console.log(payload)

            return {
                ...state,
                podcasts: payload
            };

        default:
            return state;
    }
};

export default reducer;