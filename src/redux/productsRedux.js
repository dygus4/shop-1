import Axios from 'axios';
import { API_URL} from '../config';
/* selectors */


export const getAll = ({ products }) => products.data;
export const getOneProduct = ({ products }) => products.oneProduct;
export const getLoading = ({ products }) => products.loading;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_ONE_PRODUCT_SUCCESS = createActionName('FETCH_ONE_PRODUCT_SUCCESS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchOneProductSuccess = payload => ({ payload, type: FETCH_ONE_PRODUCT_SUCCESS });

/* thunk creators */
export const fetchProducts = () => {
  return (dispatch, getState) => {
    if (getState().products.data.length === 0) {
      dispatch(fetchStarted());

      Axios
        .get(`${API_URL}/products`)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchOneProduct = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}/products/${id}`)
      .then(res => {
        dispatch(fetchOneProductSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
    
  };
};
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
        
      };
    }
    case FETCH_SUCCESS: {
      return {
        data: [...action.payload],
        oneProduct: {},
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_ONE_PRODUCT_SUCCESS: {
      return {
        data: [...statePart.data],
        oneProduct: action.payload,
        loading: {
          active: false,
          error: false,
        },
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
