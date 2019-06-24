import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';


//LOGIN
export const login = creds => dispatch =>{
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        .post('/login', creds) //endpoint?
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.payload) 
            dispatch({ type: LOGIN_SUCCESS });
            return true;
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: LOGIN_FAIL })
        })
}


//GET
export const getData = () => dispatch => {
    dispatch({ type: FETCH_START });
    axiosWithAuth()
    .get('') //get endpoint here
    .then(res => {
        console.log(res);
        console.log('res.data', res.data)
        dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch( err => {
        console.log(err.response);
        dispatch({ type: FETCH_FAIL, payload: err.response }) //might need to edit payload here
    })
}

//POST
export const addTab = (tab) => dispatch => {
    dispatch({ type: ADD_START });
    axiosWithAuth()
    .post('', tab) //Post Endpoint
    .then(res => {
        console.log('addFriend', res);
        dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: ADD_FAIL, payload: err.response })
    })

}

//DELETE
export const deleteTab = (id) => dispatch =>{
    dispatch({ type: DELETE_START });
    axiosWithAuth()
    .delete(`/${id}`) //Delete endpoint
    .then(res => {
        console.log('delete', res);
        dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log('delete error', err.response);
        dispatch({ type: DELETE_FAIL, payload: err.response })
    })
}

//PUT
export const updateTab = () => dispatch => {
    dispatch({ type: UPDATE_START });
    axiosWithAuth()
    .put()//PUT ENDPOINT
    .then(res => {
        console.log('updateTab', res);
        dispatch({ tpye: UPDATE_SUCCESS, payload: res.data })
    }) 
    .catch(err => {
        console.log('update error', err.response);
        dispatch({ type: UPDATE_FAIL, payload: err.response })
    })
}