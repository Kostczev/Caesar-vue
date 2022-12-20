<template>
   <div id="main">
      <mainWrapper />
   </div>
</template>

<script>
   
   import mainWrapper from '@/components/main-wrapper.vue';
   export default {
      name: 'app',
      components: {
         mainWrapper
      }
   }
</script>

<style>
   body {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
   }
   #main {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      /*height: 100vh;*/
   }
</style>
