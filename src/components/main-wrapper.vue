<template>
   <div class="main-wrapper">
      <Caeser />
   </div>
</template>

<script>
import Caeser from '@/components/Caesar.vue';

export default {
   name: 'main-wrapper',
   components: {
      Caeser
   }
}

</script>

<style>
   .main-wrapper {
      min-height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
</style>