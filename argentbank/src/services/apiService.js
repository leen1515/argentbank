import axios from 'axios';
import { errorMessage, isLoading } from '../ReduxFunctions/userActions';

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


