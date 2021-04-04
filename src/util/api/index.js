import { apiRequest } from '../util'

export const createSubscription = (data) => {
  return apiRequest('newsletter', 'POST', data)
}

export const verifyEmail = (email) => {
  return apiRequest(`newsletter?verified=${email}`, 'POST', null)
}