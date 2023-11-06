import axios from 'axios'
export const fetchProductApi = () => {
  return axios({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET'
  })
}

export const fetchProductFilterName = (keyword) => {
  return axios({
    url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
    method: 'GET'
  })
}

export const getProductByIdApi = (id) => {
  return axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: 'GET'
  })
}
