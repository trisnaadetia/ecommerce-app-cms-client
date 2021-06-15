<template>
    <div>
      <Navbar/>
      <div class="text-center" v-if="!openForm">
        <h2 class="m-3"><strong>==WELCOME TO HOOPSPOINT CMS==</strong></h2>
        <button type="button" class="btn btn-primary m-3" @click.prevent="openModal(true)">ADD PRODUCT HERE</button>
        <button type="button" class="btn btn-success m-3" @click.prevent="addBanner">ADD BANNER HERE</button>
      </div>
      <FormProduct :isEdit="isEdit" v-if="openForm" @cancel="openModal"/>
      <div class="container mt-3" v-if="!openForm">
        <h3 class="m-2">Product List</h3>
        <div class="row" style="overflow: scroll;max-height: 100vh">
          <div class="card shadow-lg bg-white rounded1 m-4" style="max-width: 22vw" v-for="product in listProduct" :key="product.id">
            <div class="card-body text-center">
              <img :src="product.image_url" alt="" style="max-width: 18vw">
              <h4 class="m-3">{{ product.name }}</h4>
              <p>Category : {{ product.Category.name }}</p>
              <p>Price : {{ convertToRupiah(product.price) }}</p>
              <p>Stock : {{ product.stock }}</p>
              <a href="" @click.prevent="editModal(product.id)"><img src="../assets/edit.png" alt="edit" width="25rem" height="25rem"></a> |
              <a href="" @click.prevent="deleteProduct(product.id)"><img src="../assets/delete.png" alt="delete" width="25rem" height="25rem"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import FormProduct from '../components/Form'
export default {
  name: 'Home',
  data () {
    return {
      openForm: false,
      isEdit: false,
    }
  },
  components: {
    Navbar,
    FormProduct
  },
  created () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Login' })
    }
    this.$store.dispatch('fetchData')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('fetchBanner')
    this.$store.state.dataLogin
  },
  methods: {
    openModal (val) {
      this.openForm = val
      if (val === false) {
        this.isEdit = false
      }
    },
    addBanner () {
      this.$router.push({ name: 'Banner' })
    },
    editModal (id) {
      this.isEdit = true
      this.openForm = true
      this.$store.dispatch('fetchDataById', id)
      .then(({ data }) => {
        this.$store.commit('setInitialValue', data)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
      .then(() => {
        this.$store.dispatch('fetchData')
        this.$vToastify.success('Product deleted')
      })
    },
    convertToRupiah (angka) {
      let rupiah = '';		
      let angkarev = angka.toString().split('').reverse().join('')
      for(let i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.'
      return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
    },
    openBanner () {
      this.$router.push({ name: 'Banner' })
    }
  },
  computed: {
    listProduct () {
      return this.$store.state.listProduct
    }
  }
}
</script>
