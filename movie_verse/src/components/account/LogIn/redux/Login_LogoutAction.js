import { LOGIN_LOGOUT } from "./Login_LogoutType";
export const setLoginLogout = (stateLogin) => {
    return {
        type: LOGIN_LOGOUT,
        payload: stateLogin
    }
}

