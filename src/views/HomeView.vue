<template>
  <img class="entete2" alt="Vuelogo" src="../assets\logos\cocktails.png" />
  <div class="allCocktails" v-if="data !== null">
    <AllCocktails
      v-for="item in data"
      :key="item.idDrink"
      :id="item.idDrink"
    ></AllCocktails>
    <img
      class="lav1"
      alt="Lavande"
      src="../Images\Lavender.png"
      width="1550"
      height="400"
    />
    <img
      class="lav2"
      alt="Lavande"
      src="../Images\Lavender.png"
      width="1550"
      height="400"
    />
    <AllCocktails></AllCocktails>
  </div>
  <img
    class="dose"
    alt="doage"
    src="../assets\logos\dosage.png"
    width="1550"
    height="400"
  />
  <AllLast></AllLast>
</template>
<script>
import AllCocktails from "@/components/AllCocktails.vue";
import AllLast from "@/components/AllLast.vue";
export default {
  name: "HomeView",
  components: {
    AllCocktails,
    AllLast,
  },
};
</script>
<style scoped>
.allCocktails {
  display: flex;
  justify-content: space-around;
  padding: 10px 10px;
}
.lav1 {
  position: absolute;
  top: 70%;
  left: 5%;
  height: 150px;
  width: 150px;
}
.lav2 {
  position: absolute;
  right: 5%;
  top: 75%;
  height: 150px;
  width: 150px;
  transform: rotate(180deg);
}
.dose {
  position: absolute;
  top: 200%;
  width: 100%;
  left: 0;
}
.entete2 {
  width: 100%;
  height: 300px;
  background: url("../assets/logos/dosage.png");
}
@media (max-width: 1409px) {
  .lav1 {
    position: absolute;
    top: 60%;
    left: 5%;
  }
  .lav2 {
    position: absolute;
    top: 65%;
    right: 5%;
  }
  .cocktails {
    left: 0;
  }
}
@media (max-width: 800px) {
  .title {
    width: 100%;
    font-size: 40px;
  }
  .cocktails > h1 {
    width: 100%;
    font-size: 40px;
  }
}
@media (max-width: 600px) {
  .title {
    width: 100%;
    font-size: 30px;
  }
  ..cocktails > h1 {
    width: 40%;
    font-size: 10px;
  }
  .cocktails > h3 {
    display: none;
  }
}
</style>
