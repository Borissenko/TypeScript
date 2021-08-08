<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { User } from '@/types'

  export default Vue.extend({
    name: 'Home' as string,
    data() {
      return {
        user: {} as User   // Declaring reactive data as type User
      }
    },
    computed: {
      fullName(): string { // Computed Property returns a string
        return `${this.user.firstName} ${this.user.lastName}`
      }
    },
    mounted(): void {
      this.user = {
        firstName: `Dave`,
        lastName: `Berning`,
        twitterHandle: `@daveberning`,
        location: {
          city: `Cincinnati`,
          state: `OH`
        }
      }
    }
  })
</script>

<style>
</style>
