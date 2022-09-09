<template>
  <h1 class="title">Chaque cocktail a sa recette...</h1>
  <div class="recette" v-for="item in data" :key="item.id">
    <router-link :to="{ name: 'infos', params: { id: item.idDrink } }">
      <img :src="item.strDrinkThumb"
    /></router-link>
    <h1>{{ item.strDrink }}</h1>
  </div>
  <div class="recette2" v-for="item in data" :key="item.id">
    <h1>Préparation</h1>
    <h2>{{ item.strIngredient2 }}</h2>
    <h2>{{ item.strIngredient3 }}</h2>
    <h2>{{ item.strIngredient4 }}</h2>
    <h2>{{ item.strIngredient5 }}</h2>
    <h2>{{ item.strIngredient8 }}</h2>
    <h2>{{ item.strInstructions }}</h2>
    <h3>{{ item.strMeasure1 }}</h3>
    <h3>{{ item.strMeasure2 }}</h3>
    <h3>{{ item.strMeasure3 }}</h3>
    <h3>{{ item.strMeasure4 }}</h3>
    <h3>{{ item.strMeasure5 }}</h3>
    <h3>{{ item.strMeasure6 }}</h3>
  </div>
  <img
    class="ing1"
    alt="cranberry"
    src="../Images\109-caraibos_cranberry-1.jpg"
    width="100"
    height="150"
  />
  <img
    class="ing2"
    alt="limonade"
    src="../Images\079-limonade_generique.jpg"
    width="100"
    height="150"
  />
  <img
    class="ing3"
    alt="citron"
    src="../Images\metwgh1606770327.jpg"
    width="100"
    height="150"
  />
  <img
    class="ing4"
    alt="Lavande"
    src="../Images\vrwquq1478252802.jpg"
    width="100"
    height="150"
  />
</template>

<script>
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "AllRecettes",
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
      const res = await apiService.getIngredients();
      const cocktails = await res.json();
      this.data = cocktails.drinks;
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
.recette2 {
  position: absolute;
  right: 3%;
  height: ;
  top: 140%;
  width: 35%;
  -moz-transform: skew(6deg, 3deg);
  -webkit-transform: skew(6deg, 3deg);
  -o-transform: skew(6deg, 3deg);
  -ms-transform: skew(6deg, 3deg);
  transform: skew(6deg, 3deg);
  border: 1px solid black;
  justify-content: center;
}
.ing {
  width: 90%;
  justify-content: sapce-around;
}
.ing1 {
  width: 7%;
}
.ing2 {
  width: 7%;
}
.ing3 {
  width: 7%;
}
.ing4 {
  width: 7%;
}
.recettes {
  width: 100%;
  max-width: 1400px;
  background: linear-gradient(
    175deg,
    #9075bc 4.02%,
    #8d69c6 12.74%,
    #8a5fd0 21.17%,
    rgba(195, 163, 246, 0) 100%,
    rgba(193, 161, 243, 0.0520833) 150%
  );
  height: auto;
  display: flex;
  flex-direction: culumn;
  justify-content: space-around;
  position: relative;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px 10px;
}
.recette {
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  background: #ffff;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px #2a264f;
  margin-bottom: 40%;
  padding: 40px 40px;
  margin-top: 30%;
  width: 35%;
}
.recette > h1 {
  margin-top: 7%;
  margin-bottom: 15%;
  font-family: Georgia, serif;
  font-size: 2em;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000000;
  font-weight: 700;
  text-decoration: underline solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;
}
.recette > h2,
h3 {
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
  width: 50%;
  height: 20%;
}
.recette2 > h2 {
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
  width: 50%;
  height: 20%;
}
.recette > h3 {
  font-family: Georgia, serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000;
  font-weight: 700;
  text-decoration: none;
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;
  margin-bottom: 5%;
}
.recette > a > img {
  width: 100%;
  height: 80%;
  color: #ffff;
  text-decoration: none;
}
</style>
