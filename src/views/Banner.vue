<template>
  <div>
    <Navbar/>
    <div class="container3 mt-5">
        <div class="col-7">
          <div class="card shadow-lg bg-white rounded1 p-5" style="overflow: scroll;max-height: 100vh">
          <h3 class="text-center mb-5">LIST BANNER</h3>
            <div class="card mb-3 text-center" v-for="banner in listBanner" :key="banner.id">
              <img class="card-img-top" :src="banner.image_url" alt="Card image cap">
              <div class="card-body">
                <h4>TItle:</h4>
                <h5>{{banner.title}}</h5>
                <h4>Status:</h4>
                <h5>{{banner.status}}</h5>
                <button type="submit" class="btn btn-primary" @click.prevent="editData(banner.id)">Edit</button>
                <button type="submit" class="btn btn-danger" @click.prevent="deleteBanner(banner.id)">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card shadow-lg bg-white rounded1 p-5">
            <h3 class="text-center mb-5">{{ isEdit ? 'EDIT BANNER' : 'ADD BANNER' }}</h3>
            <form>
              <div class="mb-3">
                <label for="title" class="form-label">Title:</label>
                <input type="text" class="" v-model="title" v-if="!isEdit">
                <input type="text" class="" v-model="initialBanner.title" v-if="isEdit">
              </div>
              <div class="mb-3">
                <label for="image_url" class="form-label">Image Url:</label>
                <input type="text" class="" v-model="image_url" v-if="!isEdit">
                <input type="text" class="" v-model="initialBanner.image_url" v-if="isEdit">
              </div>
              <div class="mb-3">
                <label for="status" class="form-label">Status:</label>
                <select class="form-select w-100 mt-3" style="height:2em;" v-model="status" v-if="!isEdit">
                  <option disabled selected value="">== choose status ==</option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
                <select class="form-select w-100 mt-3" style="height:2em;" v-model="initialBanner.status" v-if="isEdit">
                  <option disabled selected>== choose status ==</option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>
              <div>
                <button type="button" class="btn btn-danger" @click.prevent="cancel">Cancel</button>
                <button type="submit" class="btn btn-primary" @click.prevent="isEdit ? editBanner(initialBanner.id) : addBanner()">{{isEdit ? 'Update' : 'Add'}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Banner',
  data () {
    return {
      title: '',
      image_url: '',
      status: '',
      isEdit: false
    }
  },
  components: {
    Navbar
  },
  methods: {
    cancel () {
      this.$router.push({ name: 'Home' })
    },
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
      .then(() => {
        this.$store.dispatch('fetchBanner')
        this.$vToastify.success('Banner deleted')
      })
    },
    addBanner () {
      const data = {
        title: this.title,
        image_url: this.image_url,
        status: this.status
      }
      this.$store.dispatch('addBanner', data)
      .then(() => {
        this.title = ''
        this.image_url = ''
        this.status = ''
        this.$store.dispatch('fetchBanner')
        this.$vToastify.success('Success add Banner')
      })
      .catch(error => {
        error.response.data.message.forEach(element => {
          this.$vToastify.error(element)       
        })
      })
    },
    editData (id) {
      this.$store.dispatch('fetchBannerById', id)
      .then(({ data }) => {
        this.$store.commit('setInitialBanner', data)
        this.isEdit = true
      })
      .catch((error) => {
        console.log(error.response.data)
      })
    },
    editBanner (id) {
      this.$store.dispatch('editBanner', id)
      .then(() => {
        this.title = ''
        this.image_url = ''
        this.status = ''
        this.isEdit = false
        this.$store.dispatch('fetchBanner')
        this.$vToastify.success('Banner updated')
      })
      .catch(error => {
        error.response.data.message.forEach(element => {
          this.$vToastify.error(element)       
        })
      })
    }
  },
  computed: {
    listBanner () {
      return this.$store.state.listBanner
    },
    initialBanner () {
      return this.$store.state.initialBanner
    }
  },
  created () {
    this.$store.dispatch('fetchBanner')
  }
}
</script>

<style>

</style>