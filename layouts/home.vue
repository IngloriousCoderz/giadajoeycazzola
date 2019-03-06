<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '1953139364946355',
        xfbml: true,
        version: 'v2.12'
      })

      window.FB.AppEvents.logPageView()
    }
  }
}
</script>
