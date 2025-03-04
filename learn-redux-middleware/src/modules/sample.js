import { handleActions } from "redux-actions";
import { produce } from "immer";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// export const getPost = (id) => async dispatch => {
//   dispatch({ type: GET_POST });
//   try {
//     const res = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: res.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };
export const getPost = createRequestThunk(GET_POST, api.getPost);

// export const getUsers = () => async dispatch => {
//   dispatch({ type: GET_USERS });
//   try {
//     const res = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: res.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initialState = {
  //   loading: {
  //     GET_POST: false,
  //     GET_USER: false,
  //   },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    // GET_POST: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.loading.GET_POST = true;
    //   }),
    [GET_POST_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        // draft.loading.GET_POST = false;
        draft.post = action.payload;
      }),
    [GET_POST_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        // draft.loading.GET_POST = false;
        draft.post = action.payload;
      }),
    // GET_USERS: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.loading.GET_USER = true;
    //   }),
    [GET_USERS_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        // draft.loading.GET_USER = false;
        draft.users = action.payload;
      }),
    [GET_USERS_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        // draft.loading.GET_USER = false;
        draft.users = action.payload;
      }),
  },
  initialState
);

export default sample;
