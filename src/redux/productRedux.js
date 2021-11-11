//import Axios from 'axios';
/* selectors */
export const getAll = ({products}) => products.data;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const CHANGE_USER = createActionName('CHANGE_USER');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const changeUser = payload => ({ payload, type: CHANGE_USER });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case CHANGE_USER: {
      return {
        logged: action.payload.logged,
        email: action.payload.email,
        name: action.payload.name,
        id: action.payload.name,
      };
        
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
