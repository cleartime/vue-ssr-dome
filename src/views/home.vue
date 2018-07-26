<template>
    <ul class="abc">
      <li v-for="i in category">{{i.name}}</li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   asyncData ({ store }) {
    return store.dispatch('setCategory')
  },
  computed: {
    ...mapGetters({
      category: 'getCategory'
    })
  },
  methods: {
    ...mapActions([
      'setCategory',
    ])
  },

}
</script>

<style scoped>

</style>