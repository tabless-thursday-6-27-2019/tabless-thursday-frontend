


const initialState = {
   isLoggingIn: false,
    error: null,
    fetching: false,
    deletingTab: false,
    updatingTab: false,
    tabs: []
}

const rootReducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch(action.type) {
        
        default: 
            return state;
    }
}

export default rootReducer;