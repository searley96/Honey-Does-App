const formList = (state= [], action) => {
    switch (action.type) {
        case 'SET_FORM_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default formList;