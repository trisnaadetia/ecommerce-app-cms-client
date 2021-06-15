<template>
  <div class="container2 mt-5">
      <div class="col-5">
        <div class="card shadow-lg bg-white rounded1 p-5">
          <h3 class="text-center mb-5">{{ isEdit ? 'EDIT PRODUCT' : 'ADD PRODUCT' }}</h3>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Name:</label>
              <input type="text" class="" v-model="name" v-if="!isEdit">
              <input type="text" class="" v-model="initialValue.name" v-else>
            </div>
            <div class="mb-3">
              <label for="image_url" class="form-label">Image Url:</label>
              <input type="text" class="" v-model="image_url" v-if="!isEdit">
              <input type="text" class="" v-model="initialValue.image_url" v-else>
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">Category:</label>
              <select class="form-select w-100 mt-3" style="height:2em;" v-if="!isEdit" v-model="CategoryId">
                <option selected disabled value="">== choose category ==</option>
                <option v-for="category in listCategory" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
              <select class="form-select w-100 mt-3" style="height:2em;" v-if="isEdit" v-model="initialValue.CategoryId">
                <option selected disabled>== choose category ==</option>
                <option v-for="category in listCategory" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Price:</label>
              <input type="number" class="" min="1" v-model="price" v-if="!isEdit">
              <input type="number" class="" min="1" v-model="initialValue.price" v-else>
            </div>
            <div class="mb-3">
              <label for="stock" class="form-label">Stock:</label>
              <input type="number" class="" min="1" v-model="stock" v-if="!isEdit">
              <input type="number" class="" min="1" v-model="initialValue.stock" v-else>
            </div>
            <div>
              <button type="button" class="btn btn-danger" @click.prevent="cancel">Cancel</button>
              <button type="submit" class="btn btn-primary" @click.prevent="isEdit ? editProduct(initialValue.id) : addProduct()">{{ isEdit ? 'UPDATE' : 'ADD' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      name: '',
      image_url: '',
      CategoryId: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel', false)
    },
    addProduct () {
      const data = {
        name: this.name,
        image_url: this.image_url,
        CategoryId: this.CategoryId,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', data)
      .then(() => {
        this.$store.dispatch('fetchData')
        this.$emit('cancel', false)
        this.$vToastify.success('Success add product')
      })
      .catch(error => {
        error.response.data.message.forEach(element => {
          this.$vToastify.error(element)       
        })
      })
    },
    editProduct (id) {
      this.$store.dispatch('editProduct', id)
      .then(() => {
        this.$store.dispatch('fetchData')
        this.$emit('cancel', false)
        this.$vToastify.success('Product updated')
      })
      .catch(error => {
        error.response.data.message.forEach(element => {
          this.$vToastify.error(element)       
        })
      })
    }
  },
  props: [ 'isEdit' ],
  computed: {
    initialValue () {
      return this.$store.state.initialValue
    },
    listCategory () {
      return this.$store.state.listCategory
    }
  }
}
</script>

<style>

</style>