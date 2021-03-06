import { create } from "./BaseService";

const http = create({
  useAccessToken: false,
  reloadOnUnauthorized: false,
})

export const login = (body) => {
  return http.post('/login', body)
}

export const getToken = (token) => {
  return http.post(`/getToken/${token}`)
}

export const activate = (token, body) => {
  return http.post(`/activate/${token}`, body)
}

export const recoverPass = (body) => {
  return http.post(`/recoverPass`, body)
}

export const doRecoverPass = (token, body) => {
  return http.post(`/recoverPass/${token}`, body)
}




