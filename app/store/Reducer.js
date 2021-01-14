import {GET_PODCASTS, ADD_PODCAST} from './Types';

const initialState = {
  podcasts: null,
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PODCASTS:
      return {
        ...state,
        podcasts: payload,
      };

    default:
      return state;
  }
};

export default reducer;
