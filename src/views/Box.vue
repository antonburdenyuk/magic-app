<template>
  <div class="Box">{{ value }} {{ id }}</div>
</template>

<script>
  export default {
    name: "Box",

    props: {
      value: {
        type: String,
        required: true
      },

      id: {
        type: String,
        required: true
      }
    }
  };
</script>

<style scoped>
  .Box {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
  }
</style>