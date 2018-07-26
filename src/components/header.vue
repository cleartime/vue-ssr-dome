<template>
    <ul>
      <li v-for="i in category" @click="link(i)">{{i.name}}</li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Gmenu',
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
    ]),
    link(obj){
        this.$router.push(obj.name)
    }
  },

}
</script>

<style scoped>

</style>