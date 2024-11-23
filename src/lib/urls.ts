export const baseURL = import.meta.env.VITE_BASEURL;

export const urls = {
  auth: {
    register: "/user/register",
    login: "/user/login",
    verify: "/user/verify",
    refresh: "/user/refresh",
    logout: "/user/logout",
    me: "/user/me",
  },
};
