<template>
  <h1 class="title">Nos cocktails sans alcool...</h1>
  <div class="sansalcool" v-for="item in data" :key="item.id">
    <router-link :to="{ name: 'infos', params: { id: item.idDrink } }">
      <img :src="item.strDrinkThumb"
    /></router-link>
    <h1>{{ item.strDrink }}</h1>
  </div>
</template>

<script>
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "AllUnalcoholic",
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.Cocktails();
  },
  methods: {
    async Cocktails() {
      const res = await apiService.getUnalcoholic();
      const cocktails = await res.json();
      this.data = cocktails.drinks.slice(1, 10);
    },
  },
};
</script>
<style scoped>
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
.unalcoholic {
  height: auto;
  flex-direction: culumn;
  justify-content: space-around;
  position: relative;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px 10px;
}
.sansalcool > h1 {
  width: 100%;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 2%;
  margin-left: 5%;
  color: #131313;
  letter-spacing: 0.15em;
  color: #131313;
  color: transparent;
  background: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255 255, 255, 0.5);
}
.sansalcool {
  position: relative;
  overflow: hidden;
  height: 25%;
  width: 25%;
  border-radius: 10px;
  box-shadow: 0 0 10px #2a264f;
  margin-bottom: 10%;
  margin-top: 15%;
  padding: 40px 40px;
  background: url("../Images/01118_HD.jpg");
  backgroud-size: cover;
}
.sansalcool > h1 {
  font-family: Georgia, serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #2a264f;
  font-weight: 700;
  text-decoration: underline solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;
}
.sansalcool > h2 {
  font-family: Georgia, serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #8a5fd0;
  font-weight: 700;
  text-decoration: none;
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;
  margin-bottom: 5%;
}
.sansalcool > h4 {
  font-family: Georgia, serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #bc75a8;
  font-weight: 700;
  text-decoration: none;
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;
  margin-bottom: 5%;
}
.sansalcool > a > img {
  width: 50%;
  height: 60%;
  color: #ffff;
  text-decoration: none;
}
</style>
