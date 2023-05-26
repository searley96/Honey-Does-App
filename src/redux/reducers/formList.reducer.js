const formList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FORM_LIST':
            return action.payload;
        case 'SET_GUEST_FORM_LIST':
            return [...state, action.payload];
        case 'CLEAR_FORM_LIST':
            return [];
        default:
            return state;
    }
}

export default formList;