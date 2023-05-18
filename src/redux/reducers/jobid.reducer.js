const jobidReducer = (state= '', action) => {
    switch (action.type) {
        case 'SET_JOB_ID_REDUCER':
            return action.payload;
        default:
            return state;
    }
}

export default jobidReducer;