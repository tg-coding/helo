const initialState = {
    user: {
        id: 0,
        username: '',
        profilePic: ''
    }
}

const GET_USER = "GET_USER"

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user
    }
}

export default function reducer (state = initialState, action) {
    const {type, payload} = action
    switch(type){
        case GET_USER:
            return {...state, username: payload.username, profilePic: payload.profilePic}
        default:
            return state
    }
}