import axios from 'axios'
export const loginApi = (data) => {
  return axios({
    url: 'https://shop.cyberlearn.vn/api/Users/signin',
    method: 'POST',
    data: data
  })
}

export const getProfileApi = (accessToken) => {
  return axios({
    url: 'https://shop.cyberlearn.vn/api/Users/getProfile',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const updateProfileApi = (accessToken, data) => {
  return axios({
    url: 'https://shop.cyberlearn.vn/api/Users/updateProfile',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    data: data
  })
}

export const orderApi = (data) => {
  return axios({
    url: 'https://shop.cyberlearn.vn/api/Users/order',
    method: 'POST',
    data: data
  })
}
