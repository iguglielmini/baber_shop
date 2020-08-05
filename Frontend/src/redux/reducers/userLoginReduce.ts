import {
    USER_TOKEN,
    USER_PROFILE,
} from '../actions/userActions';

interface UserLogin {
    type: string
    userToken: string
    userProfile: object
}

const token = sessionStorage.getItem('ACCESS_TOKEN');
const profile = sessionStorage.getItem('PROFILE_USER');

const initialState = {
    userToken: token,
    user: Object.assign({
        id: '',
        name: '',
        email: '',
        perfil: '',
        avatar: null,
        password: '',
        updateAt: '',
        createdAt: '',
    }, JSON.parse(profile || '{}')),
}

export const userLoginReduce = (state = initialState, action: UserLogin) => {
    switch (action.type) {
        case USER_TOKEN:
            return {
                ...state,
                userToken: action.userToken,
            }
        case USER_PROFILE:
            return {
                ...state,
                user: action.userProfile,
            }
        default:
            return state;
    }
}