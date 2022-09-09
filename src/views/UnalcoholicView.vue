<template>
  <div class="unalcoholic">
    <img
      alt="Vuelogo"
      src="../assets\logos\cocktails.png"
      width="1567"
      height="300"
    />
    <AllCocktails></AllCocktails>
    <AllUnalcoholic></AllUnalcoholic>
  </div>
</template>

<script>
import AllUnalcoholic from "@/components/AllUnalcoholic.vue";

export default {
  name: "UnalcoholicView",
  components: {
    AllUnalcoholic,
  },
};
</script>
<style scoped>
.unalcoholic {
  position: absolute;
  width: auto;
  display: flex;
  justify-content: space-around;
}
.title {
  margin-top: 30px;
}
</style>
