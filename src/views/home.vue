<template>
    <div @click="link">
      {{name}}
    </div>
</template>

<script>
export default {
  data(){
    return{
      name: '点我'
    }
  },
  methods: {
    link(){
      this.$router.push('list')
    }
  },
}
</script>

<style scoped>

</style>