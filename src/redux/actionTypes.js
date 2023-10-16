export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';

export const createPostRequest = () => ({
    type: CREATE_POST_REQUEST,
  });
  
  export const createPostSuccess = (data) => ({
    type: CREATE_POST_SUCCESS,
    payload: data,
  });
  
  export const createPostFailure = (error) => ({
    type: CREATE_POST_FAILURE,
    payload: error,
  });
  


export const createPost = () => {
  return async (dispatch, getState) => {
    dispatch(createPostRequest())
    try {
        dispatch(CREATE_POST_SUCCESS)
    } catch (error) {
      dispatch(createPostFailure(error))
    }
  };
};
