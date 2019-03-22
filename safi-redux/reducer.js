export const GET_REPOS = "safi-redux/repos/LOAD";
export const GET_REPOS_SUCCESS = "safi-redux/repos/LOAD_SUCCESS";
export const GET_REPOS_FAIL = "safi-redux/repos/LOAD_FAIL";

export const GET_REPO_INFO = 'safi-redux/repos/INFO';
export const GET_REPO_INFO_SUCCESS = 'safi-redux/repos/INFO_SUCCESS';
export const GET_REPO_INFO_FAIL = 'safi-redux/repos/INFO_FAIL';

export const GET_USER = 'safi-redux/repos/USER';
export const GET_USER_SUCCESS = 'safi-redux/repos/USER_SUCCESS';
export const GET_USER_FAIL = 'safi-redux/repos/USER_FAIL';

const initialState = { repos: [], repoInfo: {}, user: {} };

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {...state, loading: true};
    case GET_REPOS_SUCCESS:
      return {...state, loading: false, repos: action.payload.data};
    case GET_REPOS_FAIL:
    console.log(action);
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repos'
      };
    case GET_REPO_INFO:
      return {...state, loadingInfo: true};
    case GET_REPO_INFO_SUCCESS:
      return {...state, loadingInfo: false, repoInfo: action.payload.data};
    case GET_REPO_INFO_FAIL:
      console.log(action.payload);
      return {
        ...state,
        loadingInfo: false,
        errorInfo: 'Error getting repo info',
      };
    case GET_USER:
      return {...state, loadingProfile: true};
    case GET_USER_SUCCESS:
      return {...state, loadingProfile: false, user: action.payload.data};
    case GET_USER_FAIL:
      return {
        ...state,
        loadingProfile: false,
        errorInfo: 'Error getting user info'  
      }
    default:
      return state;
  }
}

export const listRepos = (user) => {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
}

export function getRepoDetail(user, repo) {
  return {
    type: GET_REPO_INFO,
    payload: {
      request: {
        url: `/repos/${user}/${repo}`
      }
    }
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/users/${user}`
      }
    }
  };
}