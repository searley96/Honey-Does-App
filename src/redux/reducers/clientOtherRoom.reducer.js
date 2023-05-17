const clientOtherRoomReducer = (state = {
    job_id: '',
    room_type: '',
    floor_type: '',
    wipe_surfaces: 'yes',
    clean_floor: 'yes',
    sq_ft: ''
}, action) => {
    switch (action.type) {
        case 'JOB_ID':
            return {...state, job_id: action.payload };
        case ''
    }
}