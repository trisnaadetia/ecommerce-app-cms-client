import Vue from 'vue'
import Vuex from 'vuex'
import baseUrl from '../axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dataLogin: '',
    listProduct: [],
    initialValue: '',
    listCategory: [],
    listBanner: [],
    initialBanner: ''
  },
  mutations: {
    setDataLogin (state, payload) {
      state.dataLogin = payload
    },
    setListProduct (state, payload) {
      state.listProduct = payload
    },
    setInitialValue (state, payload) {
      state.initialValue = payload
    },
    setListCategory (state, payload) {
      state.listCategory = payload
    },
    setListBanner (state, payload) {
      state.listBanner = payload
    },
    setInitialBanner (state, payload) {
      state.initialBanner = payload
    }
  },
  actions: {
    login (context, data) {
      return baseUrl({
        method: 'POST',
        url: '/loginAdmin',
        data: {
          email: data.email,
          password: data.password
        }
      })
    },
    getCategories (context) {
      baseUrl ({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({ data }) => {
        context.commit('setListCategory', data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    fetchData (context) {
      baseUrl ({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({ data }) => {
        context.commit('setListProduct', data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    fetchDataById (context, id) {
      return baseUrl ({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    addProduct (context, data) {
      return baseUrl ({
        method: 'POST',
        url: '/products',
        data: {
          name: data.name,
          image_url: data.image_url,
          CategoryId: data.CategoryId,
          price: data.price,
          stock: data.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    deleteProduct (context, id) {
      return baseUrl ({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    editProduct (context, id) {
      return baseUrl ({
        method: 'PUT',
        url: '/products/' + id,
        data: {
          name: this.state.initialValue.name,
          image_url: this.state.initialValue.image_url,
          CategoryId: this.state.initialValue.CategoryId,
          price: this.state.initialValue.price,
          stock: this.state.initialValue.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    fetchBanner (context) {
      baseUrl ({
        method: 'GET',
        url: '/banners',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({ data }) => {
        context.commit('setListBanner', data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deleteBanner (context, id) {
      return baseUrl ({
        method: 'DELETE',
        url: '/banners/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    addBanner (context, data) {
      return baseUrl ({
        method: 'POST',
        url: '/banners',
        data: {
          title: data.title,
          image_url: data.image_url,
          status: data.status
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    fetchBannerById (context, id) {
      return baseUrl ({
        method: 'GET',
        url: '/banners/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    editBanner (context, id) {
      return baseUrl ({
        method: 'PUT',
        url: '/banners/' + id,
        data: {
          title: this.state.initialBanner.title,
          image_url: this.state.initialBanner.image_url,
          status: this.state.initialBanner.status
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  }
})

export default store
