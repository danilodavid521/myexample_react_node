//================== MAIN FEATURE ==================//
export const authenticatedSelector = (state) => state.app.isAuthenticated;
export const todoSelector = (state) => state.todo;
export const userSelector = (state) => state.auth;

//================== LOADING ==================//
export const selectorLoadingApp = (state) => state.app.loading;
export const authLoadingSelector = (state) => state.auth.loading;
export const todoLoadingSelector = (state) => state.todo.loading;

//================== ERROR MESSAGE ==================//
export const errorAuthSelector = (state) => state.auth.messageError;
