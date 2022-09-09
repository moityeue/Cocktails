<template>
  <AllLogin></AllLogin>
  <h1 class="title">Notre toute dernière sélection ...</h1>
  <div
    class="cocktails"
    v-for="item in data"
    :key="item.idDrink"
    :id="item.idDrink"
  >
    <router-link :to="{ name: 'infos', params: { id: item.idDrink } }">
      <img :src="item.strDrinkThumb"
    /></router-link>
    <h1>{{ item.strDrink }}</h1>
    <h3>{{ item.strCategory }}</h3>
    <h4>{{ item.strGlass }}</h4>
  </div>
</template>
<script>
import ApiService from "@/service/apiServices.js";
const apiService = new ApiService();
export default {
  name: "AllCocktails",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.Cocktails(this.id);
  },
  methods: {
    async Cocktails(id) {
      const res = await apiService.getDrinks(id);
      const cocktails = await res.json();
      this.data = cocktails.drinks.slice(0, 3);
    },
  },
};
</script>

<style scoped>
.allCocktails {
  height: 100%;
}
.dose {
  background: url("../assets/logos/dosage.png");
}
.title {
  width: 80%;
  text-align: center;
  font-size: 2em;
  margin-top: 10%;
  align-items: center;
  font-family: Georgia, serif;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #fff;
  word-spacing: 2px;
}
.cocktails {
  height: 5%;
  width: 20%;
  font-size: 12px;
  border-radius: 10px;
  box-shadow: 0 0 10px #2a264f;
  margin-bottom: 10%;
  padding: 40px 40px;
  margin-top: 20%;
  background: url("../Images/01118_HD.jpg");
  background-size: cover;
}
.cocktails > h1 {
  width: 100%;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 10%;
  color: #fff;
  letter-spacing: 0.15em;
  color: transparent;
  background: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255 255, 255, 0.5);
}
.cocktails > h3 {
  margin-bottom: 5%;
  color: #9a5fd1;
}
.cocktails > h4 {
  margin-bottom: 5%;
  color: #8a5fd0;
}
.cocktails > a > img {
  margin-bottom: 15%;
  border-radius: 10px;
  width: 100%;
  height: 30%;
  color: #ffff;
  text-decoration: none;
}
</style>
