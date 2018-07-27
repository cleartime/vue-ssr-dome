<template>
    <div @click='link'>
         <ul>
        <li v-for="(i, index) in category" @click="link(i)" :key="index">{{i.name}}</li>
      </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        asyncData ({ store, route}) {
            return store.dispatch('setCategory')
        },
        computed: {
            ...mapGetters({
            category: 'getCategory'
            })
        },
        data() {
            return {
                name: 'list'
            }
        },
        methods: {
            ...mapActions([
            'setCategory',
            ]),
            link(obj){
                this.$router.push(obj.name)
            }
        },
        methods: {
            link(obj) {
                this.$router.push('/')
            }
        },
        beforeMount() {
        }
    }
</script>

<style scoped>
    
</style>