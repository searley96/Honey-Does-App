const activeJobReducer = (state= {}, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_JOB':
            return action.payload;
        default:
            return state;
    }
}

export default activeJobReducer;