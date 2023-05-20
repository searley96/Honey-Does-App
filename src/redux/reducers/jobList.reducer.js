const jobList = (state= '', action) => {
    switch (action.type) {
        case 'SET_JOB_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default jobList;