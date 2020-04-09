<template>
  <div class="row">
    <b-form @submit="onSubmit">
      <b-form-input v-model="form.name" type="text" required placeholder="Enter your name"></b-form-input>

      <br />

      <b-form-input v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>

      <br />

      <b-form-input type=password v-model="form.password" required placeholder="Enter password"></b-form-input>

      <br />

      <b-form-input type=password v-model="form.passwordConfirmation" required placeholder="Enter password again"></b-form-input>

      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        registeredAt: window.location.origin
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.axios
        .post('http://webshop.test/api/registration', this.form)
        .then((response) => {
          console.log(response)

          this.$router.push('registered')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
