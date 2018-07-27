<template>
    <div>
       <ul>
        <li v-for="(i, index) in category" @click="link(i)" :key="index">{{i.name}}</li>
      </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Gmenu',
  asyncData ({ store, route}) {
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