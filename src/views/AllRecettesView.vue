<template>
  <div class="recettes">
    <img
      alt="Vuelogo"
      src="../assets\logos\cocktails.png"
      width="1567"
      height="300"
    />
    <AllRecettes></AllRecettes>
  </div>
</template>

<script>
import AllRecettes from "@/components/AllRecettes.vue";

export default {
  name: "AllRecettesView",
  components: {
    AllRecettes,
  },
};
</script>
