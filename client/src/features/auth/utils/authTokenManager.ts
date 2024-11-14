export const authTokenManager = {
    authTokenKey: import.meta.env.VITE_TOKEN_LOCALSTORAGE_KEY,

    getToken() {
        return localStorage.getItem(this.authTokenKey);
    },

    setToken(token: string) {
        localStorage.setItem(this.authTokenKey, token);
    },

    resetToken() {
        localStorage.removeItem(this.authTokenKey);
    }
}
