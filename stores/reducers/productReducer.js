import { createSlice } from '@reduxjs/toolkit'
import { fetchProductApi, fetchProductFilterName, getProductByIdApi } from '../../servers/product'

const initialState = {
  products: [],
  detailProduct: [],
  cart: []
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.products = action.payload
    },
    getFilterProduct: (state, action) => {
      state.products = action.payload
    },
    getProductById: (state, action) => {
      state.detailProduct = action.payload
    },
    addToCart: (state, action) => {
      const data = [...state.cart]
      const index = data.findIndex((item) => item.id === action.payload.id)
      index !== -1 ? (data[index].quantity += 1) : data.push(action.payload)

      state.cart = data
    },
    handleQuantityChange: (state, action) => {
      const data = [...state.cart]
      const index = data.findIndex((item) => item.id === action.payload.id)

      if (action.payload.isF) {
        data[index].quantity += 1
      } else if (data[index].quantity > 1) {
        data[index].quantity -= 1
      } else {
        if (window.confirm('Are you sure you want to delete the product?')) {
          data.splice(index, 1)
        }
      }
      state.cart = data
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => (item.id === action.payload ? false : true))
    },
    deleteAllCart: (state, action) => {
      state.cart = []
    }
  }
})

export const {
  getAllProduct,
  getProductById,
  getFilterProduct,
  addToCart,
  handleQuantityChange,
  deleteCart,
  deleteAllCart
} = productReducer.actions

export default productReducer.reducer

//------------------Action thunk-----------------------
export const fetchProductAction = () => {
  return async (dispatch, getState) => {
    const result = await fetchProductApi()
    const action = getAllProduct(result.data.content)
    dispatch(action)
  }
}

export const fetchProductFilterNameAction = (keyword) => {
  return async (dispatch, getState) => {
    const result = await fetchProductFilterName(keyword)
    const action = getFilterProduct(result.data.content)
    dispatch(action)
  }
}

export const getProductByIdAction = (id) => {
  return async (dispatch, getState) => {
    const result = await getProductByIdApi(id)
    const action = getProductById(result.data.content)
    dispatch(action)
  }
}
