import {
    USER_TOKEN,
    USER_PROFILE,
} from './userActions';

const setUserToken = (value: string | null) => ({
    type: USER_TOKEN,
    userToken: value,
});

const setUserProfile = (value: object | null) => ({
    type: USER_PROFILE,
    userProfile: value,
});

export {
    setUserToken,
    setUserProfile,
}