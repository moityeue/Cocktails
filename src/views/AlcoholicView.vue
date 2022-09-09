<template>
  <div class="alcoholic">
    <img
      alt="Vuelogo"
      src="../assets\logos\cocktails.png"
      width="1567"
      height="300"
    />
    <AllAlcoholic></AllAlcoholic>
  </div>
</template>

<script>
import AllAlcoholic from "@/components/AllAlcoholic.vue";

export default {
  name: "AlcoholicView",
  components: {
    AllAlcoholic,
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
h1 {
  margin: 100px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
