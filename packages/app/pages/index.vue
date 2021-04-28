<template>
  <div>
    <h1>{{beer.name}}</h1>
    ^There should be a beer name
  </div>
</template>

<script>
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const beer = ref({})
    useFetch(async () => {
      beer.value = await fetch('https://api.nuxtjs.dev/beers/belgian-moon').then(r => r.json())
    })
    return {
      beer
    }
  }
})
</script>
