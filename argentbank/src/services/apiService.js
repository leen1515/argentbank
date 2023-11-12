import axios from 'axios';
import { errorMessage, isLoading } from '../ReduxFunctions/userActions';
/**
 * Creates and configures an Axios instance for API requests.
 *
 * This function sets up an Axios instance with a base URL for user-related API requests.
 * It also configures response and error interceptors.
 * @function
 * @name apiInstanceHandler
 * @param {function} dispatch - The Redux `dispatch` function for dispatching actions.
 * @returns {AxiosInstance} Configured Axios instance with interceptors.
 * @example
 * const api = apiInstanceHandler(store.dispatch);
 * api.get('/profile').then(response => console.log(response));
 */
export function apiInstanceHandler(dispatch){
    const api = axios.create({
      baseURL: "http://localhost:3001/api/v1/user",
    });

    api.interceptors.response.use(
      response => {
        dispatch(errorMessage(null));
        dispatch(isLoading(false));
        return response;
      },
      error => {
        let errorMsg = 'Network Error';
        if (error.response) {
          switch (error.response.status) {
            case 400:
              errorMsg = 'Invalid Fields';
              break;
            case 500:
              errorMsg = 'Internal Server Error';
              break;
            default:
              errorMsg = 'Unknown Error';
              break;
          }
        }
        dispatch(isLoading(false));
        dispatch(errorMessage(errorMsg));
        return Promise.reject(error);
      }
    );    
  return api;
}


