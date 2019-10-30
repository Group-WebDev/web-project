<template>
  <div>
      <Navigation/>
      <LoginForm/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import LoginForm from '@/views/LoginForm.vue'

export default {
    components:{
        Navigation,
        LoginForm
    }
}
</script>

<style>

</style>