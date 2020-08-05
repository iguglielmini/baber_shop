import API from './api';

class AuthService {
    static async signIn(data: object) {
        const api = new API();
        return api.post('/auth/signIn', { ...data });
    }

    static async signUp(data: object) {
        const api = new API();
        return api.post('/auth/signUp', { ...data });
    }
}

export default AuthService;
