<template>
  <div class="row">
    <p>asd</p>
  </div>
</template>

<script>
export default {
  mounted () {
    this.verifyEmail()
  },
  methods: {
    verifyEmail () {
      this.axios
        .get(`/email/verify/${this.$route.params.id}/${this.$route.params.hash}`)
        .then((response) => {
          console.log(response)

          this.$router.push('login')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
