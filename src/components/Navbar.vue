<template>
    <nav class="mb-4 navbar navbar-expand-lg navbar-dark bg-unique">
        <a class="navbar-brand" href="#">
            <img src="../assets/logo.png" alt="" width="75" height="30" class="d-inline-block align-text-top">
                CMS
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" @click.prevent="home">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
            <ul class="navbar-nav ml-auto nav-flex-icons">
                <li class="nav-item dropdown">
                    <button type="button" class="btn btn-success" @click.prevent="logout">Logout</button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'Login' })
      this.$swal.fire(
        'See You!',
        this.user,
        'success'
      )
    },
    home () {
      this.$router.push({ name: 'Home' }).catch(()=>{})
    }
  },
  computed: {
    user () {
      return this.$store.state.dataLogin.email
    }
  }
}
</script>

<style>

</style>
