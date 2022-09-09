<template>
  <h1 class="title">La petite nouveauté du chef...</h1>
  <img
    class="verre1"
    alt="Lavande"
    src="../Images/6ck9yi1589574317.jpg"
    width="150"
    height="100"
  />
  <img
    class="verre2"
    alt="Lavande"
    src="../Images\qgdu971561574065.jpg"
    width="150"
    height="100"
  />
  <div class="alll" v-for="item in data" :key="item.id">
    <router-link :to="{ name: 'infos', params: { id: item.idDrink } }">
      <img :src="item.strDrinkThumb"
    /></router-link>
    <h1>{{ item.strDrink }}</h1>
    <h2>{{ item.strGlass }}</h2>
  </div>
</template>
<script>
import ApiServices from "@/service/apiServices.js";
const apiServices = new ApiServices();
export default {
  name: "AllLast",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.Cocktails();
  },
  methods: {
    async Cocktails() {
      const res = await apiServices.getLast();
      const cocktails = await res.json();
      this.data = cocktails.drinks.slice(0, 1);
    },
  },
};
</script>

<style scoped>
.allLast {
  height: 20%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 50px 50px;
  margin-bottom: 10%;
  margin-top: 2%;
  background: url("../assets/logos/dosage.png");
}
.verre1 {
  position: absolute;
  top: 295%;
  left: 10%;
  border-radius: 10%;
}
.verre2 {
  position: absolute;
  right: 10%;
  border-radius: 10%;
}
.title {
  width: 100%;
  text-align: center;
  font-size: 3em;
  margin-top: 60%;
  margin-bottom: 10%;
  align-items: center;
  font-family: Georgia, serif;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #fff;
  word-spacing: 2px;
}
.alll {
  position: relative;
  overflow: hidden;
  height: 25%;
  width: 15%;
  border-radius: 10px;
  box-shadow: 0 0 10px #2a264f;
  margin-bottom: 10%;
  padding: 40px 40px;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 40%;
  color: #0000;
  background: url("../Images/01118_HD.jpg");
  background-size: cover;
}
.alll > h1 {
  margin-top: 9%;
  justify-content: center;
  font-size: 2em;
  color: #835bc6;
}
.alll > h2 {
  font-size: 2em;
  margin-top: 5%;
  color: #df5959;
}
.alll > a > img {
  width: 90%;
  height: 60%;
}
</style>
