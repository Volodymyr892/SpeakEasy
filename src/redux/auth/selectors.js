export const selectUserName = (state) => state.auth.name;
export const selectIsloggedIn = (state) => state.auth.isLoggedIn;
export const selectToken = (state) => state.auth.token;
export const selectAuthError =(state) => state.auth.error;
