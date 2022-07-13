import { BASE_URL } from "../../baseUrl";
import * as ActionTypes from "../ActionType"

export const userdata = () => (dispatch) => {
  try {
    dispatch(loadinguser())

    setTimeout(function () {
     return fetch(BASE_URL + 'User')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
        .then(User => dispatch({ type: ActionTypes.GET_USER, payload: User }))
        .catch(error => dispatch(erroruser(error.message)))
    }, 2000);

  } catch (error) {
    dispatch(erroruser(error))
    console.log(error);

  }
}

export const postuser = (data) => (dispatch) => {
  try {
    dispatch(loadinguser())
    setTimeout(() => {
      return fetch(BASE_URL + 'User', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
        .then(User => dispatch({ type: ActionTypes.POST_USER, payload: User }))
        .catch(error => dispatch(erroruser(error.message)))

    }, 2000);

  } catch (error) {
    dispatch(erroruser(error))
    console.log(error);

  }
}

export const deleteuser = (id) => (dispatch) => {
  try {
    dispatch(loadinguser())
    setTimeout(() => {
     return fetch(BASE_URL + 'User', {
        method: 'DELETE', // or 'PUT'
     
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
        .then(dispatch({ type: ActionTypes.DELETE_USER, payload: id }))
        .catch(error => dispatch(erroruser(error.message)))

    }, 2000);

  } catch (error) {
    dispatch(erroruser(error))
    console.log(error);

  }
}

export const updateuser = (data) => (dispatch) => {
  try {
    dispatch(loadinguser())
    setTimeout(() => {
     return fetch(BASE_URL + 'User/' + data.id, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
     
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
        .then(User => dispatch({ type: ActionTypes.DELETE_USER, payload: User }))
        .catch(error => dispatch(erroruser(error.message)))

    }, 2000);

  } catch (error) {
    dispatch(erroruser(error))
    console.log(error);

  }
}

export const loadinguser = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_USER })
}

export const erroruser = (e) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROE_USER, payload: e })
}
